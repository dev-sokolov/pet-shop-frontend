import ButtonDiscount from "../../../shared/components/ButtonDiscount/ButtonDiscount"

import { useForm } from "react-hook-form"

import styles from './GetDiscountForm.module.css'

const GetDiscountForm = ({ submitForm}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <input {...register("userName", { required: "Name is required" })} className={styles.inputStyle} type="text" placeholder="Name" />
            {errors.userName && <p className={styles.error}>{errors.userName.message}</p>}
            <input {...register("userPhone", { required: "Phpne number is required" })} className={styles.inputStyle} type="tel" placeholder="Phone number" />
            {errors.userPhone && <p className={styles.error}>{errors.userPhone.message}</p>}
            <input {...register("userEmail", { required: "Email is required" })} className={styles.inputStyle} type="email" placeholder="Email" />
            {errors.userEmail && <p className={styles.error}>{errors.userEmail.message}</p>}
            <div className={styles.btn}>
                <ButtonDiscount type="submit" >Get a discount</ButtonDiscount>
            </div>
        </form>
    )
}

export default GetDiscountForm;