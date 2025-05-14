import styles from "./SectionTitle.module.css"

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h2 className={styles.titleStyle} >{title}</h2>
        </div>
    )
}

export default SectionTitle;
