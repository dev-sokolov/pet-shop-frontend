import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import CategoryCard from "../../shared/components/CategoryCard/CategoryCard";

import { getAllCategory } from "../../redux/categories/categories-thunks";
import { selectAllCategories } from "../../redux/categories/categories-selectors";

import Container from "../Container/Container";

import styles from './Categories.module.css'

const Categories = ({ isAllCategories }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])


    const items = useSelector(selectAllCategories);
    return (
        <>
            <Container>
                <div className={styles.wrapper}>
                    <CategoryCard isAllCategories={isAllCategories} cards={items.categories} />
                    {items.loading && <p>Loading...</p>}
                    {items.error && <p style={{ color: "red" }}>{items.error}</p>}
                </div>
            </Container>
        </>
    );
}

export default Categories;