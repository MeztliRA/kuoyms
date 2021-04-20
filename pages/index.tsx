import Head from 'next/head'
import Link from "next/link";
import Footer from "../components/Footer";
import Favicon from "../components/Favicon";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kuoyms</title>
        <Favicon/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kuoyms
        </h1>

        <p className={styles.description}>
          A country info website
        </p>

        <div className={styles.pages}>
          <Link href="/country">Country</Link>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link href="/about">About</Link>
        </div>
      </main>

      <Footer/>
    </div>
  )
}