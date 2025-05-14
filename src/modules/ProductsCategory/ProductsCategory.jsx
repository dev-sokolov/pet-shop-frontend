import ProductsCategoryPageItem from '../../shared/components/ProductsCategoryPageItem/ProductsCategoryPageItem';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';

import { useSearchParams } from 'react-router-dom';
import styles from './ProductsCategory.module.css';

import { getProductsCategoryApi } from '../../shared/api/category-api';

import { useEffect, useState } from 'react';

const ProductsCategory = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id')

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState([]);
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchProductCard = async () => {
            try {
                setLoading(true);
                const { data } = await getProductsCategoryApi(id);
                setCard(data);
                setCategory(data.category)
                setData(data.data)
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
        <>

            <SectionTitle title={category.title} />
            <div className={styles.wrapper}>
                {loading && <p>Loading search...</p>}
                {error && <p className={styles.error}>Search error{error}</p>}
                <ProductsCategoryPageItem data={data} loading={loading} error={error}/>
            </div>

        </>
    )
}

export default ProductsCategory;



