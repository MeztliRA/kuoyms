import Link from "next/link";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import Twemoji from "react-twemoji";
import styles from "../../styles/CountryInfo.module.css";

export default function Country() {
    return (
        <div className={styles.container}>
          <Title title="Country"/>

        <main className={styles.main}>
          <h1 className={styles.title}>
          Country
          </h1>

        <p className={styles.description}>
          List of country(not complete)
        </p>

        <ul className={styles.list}>
          <Twemoji>
            <li><Link href="/country/argentina"> 🇦🇷 Argentina</Link></li>            
            <br/>
            <li><Link href="/country/brazil"> 🇧🇷 Brazil</Link></li>            
            <br/>
            <li><Link href="/country/canada"> 🇨🇦 Canada</Link></li>
            <br/>
            <li><Link href="/country/finland"> 🇫🇮 Finland</Link></li>
            <br/>
            <li><Link href="/country/indonesia"> 🇮🇩 Indonesia</Link></li>
            <br/>
            <li><Link href="/country/morocco"> 🇲🇦 Morocco</Link></li>
            <br/>
            <li><Link href="/country/poland"> 🇵🇱 Poland</Link></li>
            <br/>
            <li><Link href="/country/united-kingdom"> 🇬🇧 United Kingdom</Link></li>
          </Twemoji>
        </ul>
        </main>

        <Footer/>
        </div>
    )
}