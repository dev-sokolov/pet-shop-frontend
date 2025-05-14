import Button from '../../shared/components/Button/Button';

import { selectCart } from '../../redux/cart/cart-selectors';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { selectOrderStatus } from '../../redux/order/order-selectors';
import { sendOrder } from '../../redux/order/order-thunks';

import { useForm } from 'react-hook-form';
import styles from './CartForm.module.css';

import { resetStatus } from '../../redux/order/order-slice';

const CartForm = () => {

    const status = useSelector(selectOrderStatus);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (status === "OK") {
            setIsModalOpen(true);
            dispatch(resetStatus());
        }
    }, [status])

    const dispatch = useDispatch();

    const products = useSelector(selectCart);
    const amount = products.reduce((acc, item) => acc + item.count, 0)
    const summ = products.reduce((acc, item) => acc + (item.price * item.count), 0)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (values) => {
        dispatch(sendOrder(values));
        reset();
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(resetStatus());
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <h3 className={styles.title}>Order details</h3>
                    <p className={styles.heading}>{amount} items</p>
                    <div className={styles.data}>
                        <div className={`${styles.heading} ${styles.total}`}>Total</div>
                        <div className={styles.summ}>${summ.toFixed(2).replace('.', ',')}</div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <input {...register("userName", { required: "Name is required" })} className={styles.input} type="text" placeholder='Name' />
                    {errors.userName && <p className={styles.error}>{errors.userName.message}</p>}
                    <input {...register("tel", { required: "Phone is required" })} type="tel" placeholder='Phone number' className={styles.input} />
                    {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}
                    <input {...register("email", { required: "Email is required" })} type="email" placeholder='Email' className={styles.input} />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    <Button type="submit" style={{ marginTop: "16px" }}>Order</Button>
                </form>
            </div>
            {isModalOpen && (
                <div className={styles.modalBackdrop}>
                    <div className={styles.modal}>
                        <div className={styles.header}>
                            <div>Congratulations! </div>
                            <div > <button className={styles.modalBtn} onClick={() => setIsModalOpen(false)}>X</button></div>
                        </div>
                        <div>
                            <p className={styles.text}>Your order has been successfully placed on the website.</p>
                        </div>
                        <div>
                            <p className={styles.text}>A manager will contact you shortly to confirm your order.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartForm