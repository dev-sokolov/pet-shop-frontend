import Container from "../Container/Container";

import ProductDiscountCardMainPage from "../../shared/components/ProductDiscountCardMainPage/ProductDiscountCardMainPage";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { getAllProductsApi } from "../../shared/api/category-api";

import styles from './SaleSectionMainPage.module.css';

const SaleSectionMainPage = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductCard = async () => {
            try {
                setLoading(true);
                const { data } = await getAllProductsApi();
                setCards(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProductCard();
    }, [])

    return (
        <Container>
            <div className={styles.wrapperSale}>
                <div className={styles.title}>
                    <SectionTitle title="Sale" />
                    <div className={styles.decor}>
                        <div className={styles.line}></div>
                        <Link to="/sales" >
                            <div className={styles.btn}>
                                <button>All sales</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <ProductDiscountCardMainPage cards={cards} loading={loading} error={error} />
            </div>
        </Container>
    )
}

export default SaleSectionMainPage;

