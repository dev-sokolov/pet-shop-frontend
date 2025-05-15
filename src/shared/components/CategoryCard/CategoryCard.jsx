
import { Link } from "react-router-dom";

import SectionTitle from "../SectionTitle/SectionTitle";

import styles from "./CategoryCard.module.css";

const CategoryCard = ({ cards, isAllCategories }) => {

    const elements = cards.map(item => {
        return (
            <Link key={item.id} className={styles.link} to={`/products-category/?id=${item.id}`}>
                <div key={item.id} className={styles.item} >
                    <img src={`http://localhost:3333${item.image}`} alt="animal" />
                    <p >{item.title} </p> </div>
            </Link>
        )
    })

    const items = elements.slice(0, 4);
    if (isAllCategories) return (
        <>
            <div className={styles.route}>
                <Link to="/" >
                    <div className={styles.btn}>
                        <button>Main page</button>
                    </div>
                </Link>
                <div className={styles.routeLine}></div>
                <Link to="/categories" >
                    <div className={styles.btnMain} style={{color: "#000"}}>
                        <button>Categories</button>
                    </div>
                </Link>
            </div>
            <SectionTitle title="Categories" />
            <div className={styles.wrap}>{elements}</div>
        </>
    )

    return (
        <>
            <div className={styles.title}>
                <SectionTitle title="Categories" />
                <div className={styles.decor}>
                    <div className={styles.line}></div>
                    <Link to="/categories" >
                        <div className={styles.btn}>
                            <button>All categories</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.wrap}>
                {items}
            </div>
        </>
    )
}

export default CategoryCard


