import Container from "../Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { getAllProductsApi } from "../../shared/api/category-api";

import ProductCard from "../../shared/components/ProductCard/ProductCard";

import styles from './Products.module.css'

const Products = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductCard = async () => {
            try {
                setLoading(true);
                const { data } = await getAllProductsApi();
                setCards(data.data);
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
            <div className={styles.route}>
                <Link to="/" >
                    <div className={styles.btn}>
                        <button>Main page</button>
                    </div>
                </Link>
                <div className={styles.routeLine}></div>
                <Link to="/products" >
                    <div className={styles.btnMain}>
                        <button>All products</button>
                    </div>
                </Link>
            </div>
            <div >
                <SectionTitle title="All products" />
                <ProductCard cards={cards} loading={loading} error={error} />
            </div>
        </Container>
    )
}

export default Products;