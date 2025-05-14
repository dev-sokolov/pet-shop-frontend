import styles from "./Button.module.css";

const Button = ({ type = "button", width = "auto", children, ...props }) => {
    return (
        <button className={styles.btn} type={type} {...props}>
            {children}
        </button>
    )
}

export default Button;