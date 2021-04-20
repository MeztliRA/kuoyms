import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "../../styles/CountryInfo.module.css";

export default function Country() {
    return (
        <div className={styles.container}>
        <Head>
            <title>Country</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
          Country
          </h1>

        <p className={styles.description}>
          List of country(not complete)
        </p>

        <ul className={styles.list}>
            <li><Link href="/country/indonesia"> 🇮🇩 Indonesia</Link></li>
        </ul>
        </main>

        <Footer/>
        </div>
    )
}