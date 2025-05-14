
import NavBasket from '../../../shared/components/icons/NavBasket';

import { useSelector } from 'react-redux';

import { selectCart } from '../../../redux/cart/cart-selectors';


import { NavLink } from 'react-router-dom';

import styles from './NavbarCart.module.css'

const NavbarCart = () => {

    const products = useSelector(selectCart);
    const cartAmount = products.reduce((acc, item) => acc + item.count, 0)

    return (
        <div className={styles.wrapper}>
            <NavLink to="/cart"><NavBasket className={styles.cart} />
                <div className={styles.circle} >
                    <p className={styles.num}>{cartAmount}</p>
                </div></NavLink>

        </div>
    )
}

export default NavbarCart;