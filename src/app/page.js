
import Image from "next/image";

import Container from "@layout/Container"
import Navbar from '@layout/Navbar'
import LinkButton from "@layout/LinkButton"

import manage_alt from '@/../public/images/home-img-alt.svg'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home_container}>
        <h1>Welcome to <span>Bluco</span></h1>
        <p>Start managing your projects right now!</p>
        <LinkButton text={"Create new project"} to={"/newProject"} />
        <Image src={manage_alt} alt="Home image" />
    </main>
  );
}
