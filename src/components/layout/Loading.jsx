import Image from 'next/image'

import loading from '@asset/loading.svg'
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loader_container}>
            <Image className={styles.loader} src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading