import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';

import { Link } from 'react-router-dom';

import { selectCart } from '../../redux/cart/cart-selectors';
import { useSelector } from 'react-redux';

import CartBox from '../../modules/CartBox/CartBox';
import CartForm from '../../modules/CartForm/CartForm';

import Container from '../../modules/Container/Container';

import Button from '../../shared/components/Button/Button';

import styles from './CartPage.module.css'

const CartPage = () => {

    const isCartEmpty = useSelector(selectCart);

    return (
        <>
            <Container>
                <div className={styles.title}>
                    <SectionTitle title="Shopping cart" />
                    <div className={styles.decor}>
                        <div className={styles.line}></div>
                        <Link to="/products" >
                            <div className={styles.btn}>
                                <button>Back to the store</button>
                            </div>
                        </Link>
                    </div>
                </div>
                {isCartEmpty.length > 0 &&
                    <div className={styles.wrapper}>
                        <div className={styles.boxWrapper}> <CartBox /></div>
                        <div className={styles.formWrapper }><CartForm /></div>
                    </div>
                }
                {isCartEmpty.length === 0 &&
                    <div className={styles.info}>
                        <p className={styles.text}>Looks like you have no items in your basket currently.</p>
                        <div> <Link to="/products"><Button>Continue Shopping</Button></Link> </div>
                    </div>
                }
            </Container>
        </>
    )
}

export default CartPage;

