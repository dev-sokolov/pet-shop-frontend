import Container from "../Container/Container";

import GoogleMap from "./GoogleMap/GoogleMap ";

import { useEffect, useState } from "react";
import { getContactsApi } from "../../shared/api/category-api";

import Instagram from "../../assets/footer/Instagram";
import WhatsApp from "../../assets/footer/WhatsApp";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import styles from './Footer.module.css'

const Footer = () => {
    const [contacts, setContacts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getContacts = async () => {
            try {
                setLoading(true);
                const { data } = await getContactsApi();
                setContacts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };
        getContacts();
    }, [])


    return (
        <footer>
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {contacts && (
                <Container>
                    <SectionTitle title="Contact" />
                    <div className={styles.info}>
                        <div className={styles.descrWrap}>
                            <div className={styles.descr} >
                                <a href="tel:">
                                    <div className={`${styles.item} ${styles.wideBox}`}>
                                        <div className={styles.title}>Phone</div>
                                        <div className={styles.text}>{contacts.phone}</div>
                                    </div>
                                </a>
                                <div className={`${styles.item} ${styles.narrowBox}`}>
                                    <div className={styles.title}>Socials</div>
                                    <div className={styles.media}>
                                        <a href="https://instagram.co"><div className={styles.iconBlock}><Instagram className={styles.icon} /></div></a>
                                        <a href="httts://whatsapp.com"><div className={styles.iconBlock}><WhatsApp className={styles.icon} /></div></a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.descr}>
                                <div className={`${styles.item} ${styles.wideBox}`}>
                                    <div className={styles.title}>Address</div>
                                    <div className={styles.text}>{contacts.address}</div>
                                </div>
                                <div className={`${styles.item} ${styles.narrowBox}`}>
                                    <div className={styles.title}>Working Hours</div>
                                    <div className={styles.text}>{contacts.working_hours}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <GoogleMap />
                        </div>
                    </div>
                </Container>
            )}
        </footer>
    )
}

export default Footer;