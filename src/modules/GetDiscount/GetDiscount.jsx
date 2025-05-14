import GetDiscountForm from './GetDiscountForm/GetDiscountForm'

import { useSelector, useDispatch } from 'react-redux'

import { selectSaleStatus } from '../../redux/sale/sale-selectors'

import { getSale } from '../../redux/sale/sale-thunks'

import Container from '../Container/Container'

import discountImg from '../../assets/main-page/get-discount.png'

import styles from './GetDiscount.module.css'

const GetDiscount = () => {

    const saleStatus = useSelector(selectSaleStatus);

    const dispatch = useDispatch();

    const submitForm = (saleData) => {
        dispatch(getSale(saleData))
    }

    return (
        <>
            <Container>
                <div className={styles.wrapper} >
                    <h2 className={styles.title}>5% off on the first order</h2>
                    <div className={styles.formWrap}>
                        <div className={styles.boxImg}>
                            <img src={discountImg} alt="animals" />
                        </div>
                        <div className={styles.boxForm}>
                            <GetDiscountForm submitForm={submitForm} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default GetDiscount;