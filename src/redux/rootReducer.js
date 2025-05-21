import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from './cart/cart-slice';
import categoriesReducer from './categories/categories-slice';
import orderReducer from './order/order-slice'
import saleReducer from './sale/sale-slice'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    cart: cartReducer,
    order: orderReducer,
    sale: saleReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
};

const persistedreducer = persistReducer(persistConfig, rootReducer);

export default persistedreducer;