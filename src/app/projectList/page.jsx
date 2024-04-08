'use client'

import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

import Container from '@layout/Container'
import LinkButton from '@layout/LinkButton'
import Message from '@layout/Message'
import ProjectCard from '@components/project/ProjectCard'
import Loading from '@layout/Loading'

import styles from './projectList.module.css'

const projectList = () => {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')
    
    let message = ''

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((answer) => answer.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((error) => console.log(error))
        }, 500)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((answer) => answer.json())
            .then(() => {
                setProjects(projects.filter((projects) => projects.id !== id))
                setProjectMessage("Project removed succesfully!")
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/NewProject" text="New project"/>
            </div>
            {message && <Message type="success" text={message} />}
            {projectMessage && <Message type="success" text={projectMessage} />}
            <Container customClass="around">
                {projects.length > 0 && 
                    projects.map((project) => (
                            <ProjectCard
                                id={project.id}
                                name={project.name}
                                budget={project.budget}
                                category={project.category}
                                key={project.id}
                                handleRemove={removeProject}
                            />
                    )
                )}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>No projects registered!</p>
                )}
            </Container>
        </div>
    )
}

export default projectList