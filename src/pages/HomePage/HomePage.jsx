import DiscountSection from "../../modules/DiscountSection/DiscountSection";
import Categories from "../../modules/Categories/Categories";
import GetDiscount from "../../modules/GetDiscount/GetDiscount";
import SaleSectionMainPage from "../../modules/SaleSectionMainPage/SaleSectionMainPage";


const HomePage = () => {
    return (
        <main>
            <DiscountSection />
            <Categories popular />
            <GetDiscount />
            <SaleSectionMainPage />
        </main>
    )
}

export default HomePage;