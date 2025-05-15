import { addToCart } from '../../redux/cart/cart-slice';
import { useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';
import styles from './SingleProductCard.module.css';
import { getProductApi } from '../../shared/api/category-api';
import { useEffect, useState } from 'react';

import Plus from '../../assets/cart/plus';
import Minus from '../../assets/cart/minus';

import Button from '../../shared/components/Button/Button';

import Container from '../Container/Container';

const SingleProductCard = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
    }

    const handleIncrease = () => {
        setCount(prev => Math.max(1, prev + 1));
    };

    const handleDecrease = () => {
        setCount(prev => Math.max(1, prev - 1));
    };

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id')

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchProductCard = async () => {
            try {
                setLoading(true);
                const { data } = await getProductApi(id);
                setCard(data);
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

    const product = card.map(item => {
        return (
            <div key={item.id} className={styles.wrapper}>
                <div> <div className={styles.imgBox}><img className={styles.img} src={`http://localhost:3333${item.image}`} alt="product" /></div></div>

                <div className={styles.info}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <div className={styles.summ}>
                        {item.discont_price ? (
                            <>
                                <span className={styles.discPrice}>
                                    ${(item.discont_price * count).toFixed(2)}
                                </span>
                                <span className={styles.price}>
                                    ${(item.price * count).toFixed(2)}
                                </span>
                                <div className={styles.bonus}>
                                    <div className={styles.reduction}>
                                        {Math.round(((item.price - item.discont_price) / item.price) * 100)}%
                                    </div>
                                </div>
                            </>
                        ) : (
                            <span className={styles.discPrice}>
                                ${(item.price * count).toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className={styles.cartAdding}>
                        <div className={styles.box}>
                            <div >
                                <button className={styles.math} onClick={() => handleDecrease()}>
                                    <div className={styles.btnStyle}><Minus /></div>
                                </button>
                            </div>
                            <div className={styles.num} > <div className={styles.numCount}>{count}</div> </div>
                            <div >
                                <button className={styles.math} onClick={() => handleIncrease()}>
                                    <div className={styles.btnStyle} ><Plus /></div>
                                </button>
                            </div>
                        </div>
                        <div><Button type='buttom' onClick={() => handleAddToCart({ ...item, count })} >Add to cart</Button></div>
                    </div>
                    <div >
                        <h5 className={styles.descrTitle}>Description</h5>
                        <p className={styles.descr}>{item.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <Container>
                {loading && <p>Loading search...</p>}
                {error && <p className={styles.error}>Search error{error}</p>}
                <div>{product}</div>
            </Container>
        </>
    )
}

export default SingleProductCard;



