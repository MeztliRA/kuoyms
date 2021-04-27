import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { useMediaQuery } from "react-responsive";
import styles from "../../styles/CountryInfo.module.css";

export function CountryInfo({ country }) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const router = useRouter();
    const { slug } = router.query;

    return isMobile ? (
        <>
            <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <Title title={country.name}/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {country.name}
                    <br/>
                    <br/>
                </h1>
                <div id="outer">
                    <div id="inner">
                    <p className={styles.card}>capital city:<br/><br/>{country.capital}</p>
                    <p className={styles.card}>language:<br/><br/>{country.language}</p>
                    <p className={styles.card}>population:<br/><br/>{country.population}</p>
                    <p className={styles.card}>currency:<br/><br/>{country.currency}</p>
                    <p className={styles.card}>continent:<br/><br/>{country.continent}</p>
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <Title title={country.name}/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {country.name}
                    <br/>
                    <br/>
                </h1>
                <div className={styles.flex}>
                    <p className={styles.card}>capital city:<br/><br/>{country.capital}</p>
                    <p className={styles.card}>language:<br/><br/>{country.language}</p>
                    <p className={styles.card}>population:<br/><br/>{country.population}</p>
                    <p className={styles.card}>currency:<br/><br/>{country.currency}</p>
                    <p className={styles.card}>continent:<br/><br/>{country.continent}</p>
                </div>
            </main>

            <Footer/>
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync("countries");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".json", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params: {slug} }) => {
    const file = fs.readFileSync(path.join("countries", slug + ".json")).toString();
    const jsonData = JSON.parse(file);

    return {
        props: { country: jsonData }
    };
}

export default CountryInfo;