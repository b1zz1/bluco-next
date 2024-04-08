import Link from 'next/link'
import Image from 'next/image'

import Container from './Container'

import logo from '@asset/bluco-logo.svg'
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <Container>
                    <Link href="/">
                        <Image className={styles.logo} src={logo} alt="Bluco&copy;" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/projectList">Projects</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/Company">About Us</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/Contact">Contact</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar