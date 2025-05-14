import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArr: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (store, { payload }) => {
            store.loading = false;
            const existingItem = store.cartArr.find(item => item.id === payload.id);
            if (existingItem) {
                existingItem.count += payload.count || 1;
            } else {
                store.cartArr.push({ ...payload, count: payload.count || 1 });
            }
        },

        deleteProduct: (store, { payload }) => {
            store.loading = false;
            store.cartArr = store.cartArr.filter(item => item.id !== payload);
        },

        increaseProduct: (store, { payload }) => {
            store.loading = false;
            const existingItem = store.cartArr.find(item => item.id === payload);
            if (existingItem) {
                existingItem.count += 1;
            }
        },

        decreaseProduct: (store, { payload }) => {
            store.loading = false;
            const existingItem = store.cartArr.find(item => item.id === payload);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1;
                } else {
                    store.cartArr = store.cartArr.filter(item => item.id !== payload);
                }
            }
        },
    },

});

export const { addToCart, deleteProduct, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;