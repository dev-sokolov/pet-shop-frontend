import { createSlice } from "@reduxjs/toolkit";

import { pending, rejected } from "../../shared/lib/redux";

import { getSale } from "./sale-thunks";

const initialState = {
    loading: false,
    error: null,
    status: 11
};

const saleSlice = createSlice({
    name: "sale",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSale.pending, pending)
            .addCase(getSale.rejected, rejected)
            .addCase(getSale.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.status = payload.status;
            })
    },
});

export default saleSlice.reducer;