
import styles from "./Container.module.css"

const Container = ({children}) => {
    return <div className={styles.containerStyle}>{children}</div>
}

export default Container;

