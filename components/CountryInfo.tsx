import Head from "next/head";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import styles from "../styles/CountryInfo.module.css";

interface Props {
    name: string,
    continent: string,
    language: string,
    population: string,
    currency: string,
    capital: string,
}

export default function CountryInfo(props:Props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return isMobile ? (
        <>
            <div className={styles.container}>
            <Head>
                <title>{props.name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {props.name}
                    <br/>
                    <br/>
                </h1>
                <div id="outer">
                    <div id="inner">
                    <p className={styles.card}>capital city:<br/><br/>{props.capital}</p>
                    <p className={styles.card}>language:<br/><br/>{props.language}</p>
                    <p className={styles.card}>population:<br/><br/>{props.population}</p>
                    <p className={styles.card}>currency:<br/><br/>{props.currency}</p>
                    <p className={styles.card}>continent:<br/><br/>{props.continent}</p>
                    </div>
                </div>
            </main>

            <Footer/>
            </div>
        </>
    ) : (
        <>
            <div className={styles.container}>
            <Head>
                <title>{props.name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {props.name}
                    <br/>
                    <br/>
                </h1>
                <div className={styles.info}>
                    <p className={styles.card}>capital city:<br/><br/>{props.capital}</p>
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