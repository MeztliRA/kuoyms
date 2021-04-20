import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/CountryInfo.module.css";

interface Props {
    name: string,
    continent: string,
    language: string,
    population: string,
    currency: string,
}

export default function CountryInfo(props:Props) {
    return (
        <>
            <div className={styles.container}>
            <Head>
                <title>{props.name}</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {props.name}
                    <br/>
                    <br/>
                </h1>
                <div className={styles.info}>
                    <p className={styles.card}>language:<br/><br/>{props.language}</p>
                    <p className={styles.card}>population:<br/><br/>{props.population}</p>
                    <p className={styles.card}>currency:<br/><br/>{props.currency}</p>
                    <p className={styles.card}>continent:<br/><br/>{props.continent}</p>
                </div>
            </main>

            <Footer/>
            </div>
        </>
    )
}