import { FaPen } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

import DeleteButton from '../layout/DeleteButton'

import placeholder from '@asset/placeholder-img.svg'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <Image src={placeholder} alt="placeholder"/>
            <div className={styles.category_text}>
                <span className={`${styles[category.name.toLowerCase()] || styles.default}`}>{category.name}</span>
            </div>
            <h4>{name}</h4>
            <p>
                <span>budget:</span> R${budget}
            </p>
            <div className={styles.project_card_actions}>
                <DeleteButton event={remove}/>
                <Link href={`/project/${id}`}>
                    <FaPen /> Edit
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard