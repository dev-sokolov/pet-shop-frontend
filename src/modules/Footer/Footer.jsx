import Container from "../Container/Container";

import GoogleMap from "./GoogleMap/GoogleMap ";

import Instagram from "../../assets/footer/Instagram";
import WhatsApp from "../../assets/footer/WhatsApp";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <SectionTitle title="Contact" />
                <div className={styles.info}>
                    <div className={styles.descrWrap}>
                        <div className={styles.descr} >
                            <div className={`${styles.item} ${styles.wideBox}`}>
                                <div className={styles.title}>Phone</div>
                                <div className={styles.text}>+49 30 915-88492</div>
                            </div>
                            <div className={`${styles.item} ${styles.narrowBox}`}>
                                <div className={styles.title}>Socials</div>
                                <div className={styles.media}>
                                    <a href="https://www.instagram.com"><div className={styles.iconBlock}><Instagram className={styles.icon}/></div></a> 
                                    <a href="https://www.whatsapp.com/"><div className={styles.iconBlock}><WhatsApp className={styles.icon}/></div></a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.descr}>
                            <div className={`${styles.item} ${styles.wideBox}`}>
                                <div className={styles.title}>Address</div>
                                <div className={styles.text}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</div>
                            </div>
                            <div className={`${styles.item} ${styles.narrowBox}`}>
                                <div className={styles.title}>Working Hours</div>
                                <div className={styles.text}>24 hours a day</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <GoogleMap />
                    </div>
                </div>
            </Container>
            {/* <a href="tel:">+380</a> */}
        </footer>
    )
}

export default Footer;