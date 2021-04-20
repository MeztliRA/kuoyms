import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/about.module.css";

export default function about() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                About
                </h1>

                <p>Kuoyms is a website to check for information of country around the world</p>
            </main>

            <Footer/>
        </div>
    )
}