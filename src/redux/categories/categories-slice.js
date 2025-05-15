import { createSlice } from "@reduxjs/toolkit";

import { pending, rejected } from "../../shared/lib/redux";

import { getAllCategory } from "./categories-thunks";

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.pending, pending)
            .addCase(getAllCategory.rejected, rejected)
            .addCase(getAllCategory.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.categories = payload.data;
            })
    },
});
export default categoriesSlice.reducer;