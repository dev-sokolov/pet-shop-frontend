
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import AllSalesPage from "./AllSalesPage/AllSalesPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import CartPage from "./CartPage/CartPage";
import SingleCardPage from "./SingleCardPage/SingleCardPage";
import ProductsCategoryPage from "./ProductsCategoryPage/ProductsCategoryPage";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/sales" element={<AllSalesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<SingleCardPage />} />
            <Route path="/products-category" element={<ProductsCategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Navigation;