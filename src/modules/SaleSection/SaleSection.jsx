import Sale from "../Sale/Sale";

import { Link } from "react-router-dom";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import Container from "../Container/Container";

import styles from './SaleSection.module.css'; 

const SaleSection = () => {
    return (
        <>
            <Container>
                <div className={styles.route}>
                    <Link to="/" >
                        <div className={styles.btn}>
                            <button>Main page</button>
                        </div>
                    </Link>
                    <div className={styles.routeLine}></div>
                    <Link to="/sales" >
                        <div className={styles.btnMain}>
                            <button>All sales</button>
                        </div>
                    </Link>
                </div>
                <div>
                    <SectionTitle title="Discounted items" />
                </div>
                <Sale />
            </Container>
        </>
    )
}

export default SaleSection;