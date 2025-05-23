import { deleteProduct, increaseProduct, decreaseProduct } from "../../redux/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";

import minus from '../../assets/cart/minus.svg'
import plus from '../../assets/cart/plusSvg.svg';
import x from '../../assets/cart/x.svg'

import { selectCart } from '../../redux/cart/cart-selectors';

import styles from './CartBox.module.css';

const CartBox = () => {
    const products = useSelector(selectCart);

    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(deleteProduct(id))
    }

    const handleIncrease = (id) => {
        dispatch(increaseProduct(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseProduct(id));
    };

    const elements = products.map((item, index) => {
        return (
            <div className={styles.wrap} key={index}>
                <div className={styles.wrapper} >
                    <div className={styles.img}><img src={`http://localhost:3333${item.image}`} alt="product" /></div>
                    <div className={styles.descr}>
                        <div className={styles.hedding}>
                            <div className={styles.title}>{item.title}</div>
                            <button className={styles.btn} onClick={() => removeFromCart(item.id)}> <img src={x} alt="x" /> </button>
                        </div>
                        <div className={styles.data}>
                            <div className={styles.box}>
                                <div >
                                    <button className={styles.math} onClick={() => handleDecrease(item.id)}>
                                        <div className={styles.btnStyle}  ><img src={minus} alt="minus" /></div>
                                    </button>
                                </div>
                                <div className={styles.num} > <div className={styles.numCount}>{item.count}</div> </div>
                                    <div >
                                    <button className={styles.math} onClick={() => handleIncrease(item.id)}>
                                        <div className={styles.btnStyle}  ><img src={plus} alt="plus" /></div>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.summ}>
                                <p className={styles.price}>${item.price * item.count}</p>
                                {item.discont_price &&  <p className={styles.discount}>${item.discont_price * item.count}</p>}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {elements}
        </>
    )
}

export default CartBox;