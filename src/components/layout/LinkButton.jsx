import Link from 'next/link'

import styles from './LinkButton.module.css'

const LinkButton = ({ text, to }) => {
    return (
        <Link className={styles.btn} href={to}>
            {text}
        </Link>
    )
}

export default LinkButton