import { useForm } from "react-hook-form"

import { useState } from "react"

import { getSaleApi } from "../../../shared/api/category-api"

import styles from './GetDiscountForm.module.css'

const GetDiscountForm = () => {
    const [saleStatus, setSeleStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        setLoading(true);
        setError(null);
        const { data, error } = await getSaleApi({ ...values });
        setLoading(false);
        if (data) {
            setSeleStatus(data.status);
            reset();
        } else {
            setError(error?.response?.data?.message || "Request failed")
        }
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
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Loading...</p>}
                <div className={styles.btn}>
                    <button className={saleStatus === "OK" ? styles.btnActiveStyle : styles.btnStyle}  >{saleStatus === "OK" ? "Request Submitted" : "Get a discount"}</button>
                </div>
            </form>
        </>
    )
}

export default GetDiscountForm;