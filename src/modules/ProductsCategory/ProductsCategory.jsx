import ProductsCategoryPageItem from '../../shared/components/ProductsCategoryPageItem/ProductsCategoryPageItem';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';

import { Link } from 'react-router-dom';

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
    const [categoryName, setCategoryName] = useState();
    const [categoryLink, setCategoryLink] = useState();

    useEffect(() => {
        const fetchProductCard = async () => {
            try {
                setLoading(true);
                const { data } = await getProductsCategoryApi(id);
                setCard(data);
                setCategoryLink(data.data.category.id)
                setCategory(data.data.category)
                setData(data.data.products)
                setCategoryName(data.data.category.title)
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
            <div className={styles.route}>
                <Link to="/" >
                    <div className={styles.btn}>
                        <button>Main page</button>
                    </div>
                </Link>
                <div className={styles.routeLine}></div>
                <Link to="/categories" >
                    <div className={styles.btn}>
                        <button>Categories</button>
                    </div>
                </Link>
                <div className={styles.routeLine}></div>
                <Link to={categoryLink} >
                    <div className={styles.btnMain}>
                        <button>{categoryName}</button>
                    </div>
                </Link>
            </div>

            <SectionTitle title={category.title} />
            <div className={styles.wrapper}>
                {loading && <p>Loading search...</p>}
                {error && <p className={styles.error}>Search error{error}</p>}
                <ProductsCategoryPageItem data={data} loading={loading} error={error} />
            </div>
        </>
    )
}

export default ProductsCategory;



