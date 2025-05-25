import GetDiscountForm from './GetDiscountForm/GetDiscountForm'

import Container from '../Container/Container'

import discountImg from '../../assets/main-page/get-discount.png'

import styles from './GetDiscount.module.css'

const GetDiscount = () => {

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
                            <GetDiscountForm />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default GetDiscount;