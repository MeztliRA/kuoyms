import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "../styles/404.module.css";

export default function page404() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>404 page not found</title>
                </Head>
                
                <main className={styles.main}>
                    <h1 className={styles.title}>
                    404 Page Not Found    
                    </h1>

                    <Link href="/">Go back home</Link>        
                </main>

                <Footer/>
            </div>
        </>
    )
}