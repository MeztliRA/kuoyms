import Footer from "../components/Footer";
import Title from "../components/Title";
import styles from "../styles/about.module.css";

export default function about() {
    return (
        <>
        <div className={styles.container}>
            <Title title="About"/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                About
                </h1>

                <p>Kuoyms is a website where you can check for info of countries around the world</p>
                
                <h4 className={styles.attribution}>
                Attribution
                </h4>

                <div className={styles.flex}>
                    <p>The emoji that this website use is from <a href="https://twemoji.twitter.com">twemoji</a></p>
                </div>
            </main>
        </div>
        <Footer/>
        </>
    )
}