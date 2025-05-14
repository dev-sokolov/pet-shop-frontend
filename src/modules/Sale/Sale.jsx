import { useState, useEffect } from "react";

import { getAllProductsApi } from "../../shared/api/category-api";

import ProductDiscountCard from "../../shared/components/ProductDiscountCard/ProductDiscountCard";

import styles from './Sale.module.css'

const Sale = () => {

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
        <div className={styles.wrapper}>
            <div>
                <ProductDiscountCard cards={cards} loading={loading} error={error} />
            </div>
        </div>
    )
}

export default Sale;