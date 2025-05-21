import { useForm } from "react-hook-form"

import { selectSaleStatus } from "../../../redux/sale/sale-selectors"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import styles from './GetDiscountForm.module.css'

const GetDiscountForm = ({ submitForm }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const saleStatus = useSelector(selectSaleStatus);

    useEffect(() => {
        if (saleStatus === "OK") {
            reset();
        }
    }, [saleStatus, reset]);

    const onSubmit = values => {
        submitForm(values);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
                <input {...register("userName", { required: "Name is required" })} className={styles.inputStyle} type="text" placeholder="Name" />
                {errors.userName && <p className={styles.error}>{errors.userName.message}</p>}
                <input {...register("userPhone", { required: "Phpne number is required" })} className={styles.inputStyle} type="tel" placeholder="Phone number" />
                {errors.userPhone && <p className={styles.error}>{errors.userPhone.message}</p>}
                <input {...register("userEmail", { required: "Email is required" })} className={styles.inputStyle} type="email" placeholder="Email" />
                {errors.userEmail && <p className={styles.error}>{errors.userEmail.message}</p>}
                <div className={styles.btn}>
                    <button className={saleStatus === "OK" ? styles.btnActiveStyle : styles.btnStyle}  >{saleStatus === "OK" ? "Request Submitted" : "Get a discount"}</button>
                </div>
            </form>
        </>
    )
}

export default GetDiscountForm;