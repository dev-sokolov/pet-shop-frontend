import styles from "./ButtonDiscount.module.css";

const ButtonDiscount = ({ type = "button", width = "auto", children, ...props }) => {
    return (
        <button className={styles.btn} type={type} {...props}>
            {children}
        </button>
    )
}

export default ButtonDiscount;