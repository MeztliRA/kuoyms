import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/">Home</Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link href="/country">Country</Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://github.com/MeztliRA/kuoyms" target="_blank" rel="noopener noreferrer">Github</a>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link href="/about">About</Link>
        </footer>
    )
}