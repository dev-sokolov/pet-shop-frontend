
import Categories from "../../modules/Categories/Categories";

const CategoriesPage = () => {
    const isAllCategories = true;
    return (
        <main>
            <Categories isAllCategories = {isAllCategories}/>
        </main>
    )
}

export default CategoriesPage;