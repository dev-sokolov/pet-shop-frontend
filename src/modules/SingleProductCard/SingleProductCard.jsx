import { addToCart } from '../../redux/cart/cart-slice';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import styles from './SingleProductCard.module.css';
import { getProductApi } from '../../shared/api/category-api';
import { useEffect, useState } from 'react';

import Plus from '../../assets/cart/plus';
import Minus from '../../assets/cart/minus';

import Button from '../../shared/components/Button/Button';

import Container from '../Container/Container';

const SingleProductCard = () => {

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
                    <h3 className={styles.title}>BELCANDO Dog Food</h3>
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
                                    <div  className={styles.btnStyle}><Minus /></div>
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
                        <p className={styles.descr}>Versatile selection: discover the culinary world for your little four-legged friend with 2 types of dry food and 6 types of wet food. So there is something for every taste. High acceptance: our balanced formula is rich in essential nutrients, vitamins and minerals and is tailored to the needs of small dog breeds. An all-round supply that leaves nothing to be desired. Dry food: Finest GF Lamb - easily digestible and a croquette coated with instant sauce for extra taste. Finest Croc - rich in meat and with grape seed flour. Wet food: you will receive a selection of different types of wet food from our range: single protein chicken, single protein buffalo, duck with rice and cranberries, rabbit with millet and sweet potato, lamb with rice and tomatoes and chicken/duck with millet and potatoes. Made in Germany: Our feed is manufactured under the strictest quality standards in Germany and contains no artificial additives. All meat products used come from food-safe animals.</p>
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



