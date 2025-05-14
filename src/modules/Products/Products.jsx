import Container from "../Container/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { useState, useEffect } from "react";

import { getAllProductsApi } from "../../shared/api/category-api";

import ProductCard from "../../shared/components/ProductCard/ProductCard";

const Products = () => {

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
            <div >
                <SectionTitle title="All products" />
                <ProductCard cards={cards} loading={loading} error={error} />
            </div>
        </Container>
    )
}

export default Products;