import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cart-slice';
import { Link } from 'react-router-dom';

import Filtration from '../../../modules/Filtration/Filtration';
import { useProductsFilters } from '../../hooks/useProductsFilters';
import styles from './ProductsCategoryPageItem.module.css';

const ProductsCategoryPageItem = ({ data, loading, error }) => {

    const dispatch = useDispatch();

    const { filteredCards } = useProductsFilters(data);

    const addProductToCart = (item) => {
        dispatch(addToCart(item));
    };

    const elements = filteredCards.map(item => (
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
            <div className={styles.btnBox}>
                <div >
                    <button className={styles.btnCard} onClick={() => addProductToCart(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <Filtration />
            <div className={styles.wrapper}>
                {elements}
                {loading && <p>Loading...</p>}
                {error && error.message}
            </div>
        </>
    );
}

export default ProductsCategoryPageItem;