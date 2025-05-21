import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cart-slice';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Filtration from '../../../modules/Filtration/Filtration';
import { useProductsFilters } from '../../hooks/useProductsFilters';
import styles from './ProductsCategoryPageItem.module.css';

const ProductsCategoryPageItem = ({ data, loading, error }) => {

    const dispatch = useDispatch();

    const { filteredCards } = useProductsFilters(data);

    const [addedProducts, setAddedProducts] = useState({});

    const addProductToCart = (item) => {
        dispatch(addToCart(item));
        setAddedProducts(prev => ({ ...prev, [item.id]: true }));
    };

    const elements = filteredCards.map(item => {
        const isAdded = addedProducts[item.id];

        return (
            <div key={item.id} className={styles.card}>
                <Link className={styles.link} to={`/product/?id=${item.id}`}>
                    <div className={styles.imgBox}>
                        {item.discont_price &&
                            <div className={styles.reduction}>
                                {Math.round(((item.price - item.discont_price) / item.price) * 100)}%
                            </div>}

                        <img src={`http://localhost:3333${item.image}`} alt="product" />
                    </div>
                    <div className={styles.descrBox}>
                        <div className={styles.descr}>{item.title}</div>
                        <div>
                            {item.discont_price ? (
                                <>
                                    <span className={styles.discPrice}>${item.discont_price}</span>
                                    <span className={styles.price}>${item.price}</span>
                                </>
                            ) : (
                                <span className={styles.discPrice}>${item.price}</span>
                            )}
                        </div>
                    </div>
                </Link>
                <div className={styles.btnBox} style={{ opacity: isAdded ? 1 : undefined }}>
                    <div>
                        <button
                            className={`${styles.btnCard} ${isAdded ? styles.active : ''}`}
                            onClick={() => addProductToCart(item)}
                            disabled={isAdded}
                        >
                            {isAdded ? 'Added' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        )

    });

    return (
        <>
            <div className={styles.filterwrap}>
                <Filtration showDiscountCheckbox={true}/>
                <div className={styles.wrapper}>
                    {elements}
                    {loading && <p>Loading...</p>}
                    {error && error.message}
                </div>
            </div>


        </>
    );
}

export default ProductsCategoryPageItem;