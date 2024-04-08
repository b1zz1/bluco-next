'use client'

import { navigate } from '../actions'

import ProjectForm from '@/components/project/ProjectForm'

import styles from './newProject.module.css'

function newProject() {
    function createPost(project) {
        
        // initialize cost and services
        project.cost = 0
        project.services = []

        let message = ''

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((answer) => answer.json())
        .then(() => {
            // push user to the Projects page after new project has been submited
            // navigate('/projects', {state: {message: 'Project succesfully created!'}})
            navigate()
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className={styles.newproject_container}>
            <div className={styles.newproject_align}>
                <h1>Create project</h1>
                <p>Create a new project to add tasks</p>
            </div>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}

export default newProject