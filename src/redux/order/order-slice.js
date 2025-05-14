import { createSlice } from "@reduxjs/toolkit";

import { pending, rejected } from "../../shared/lib/redux";

import { sendOrder } from "./order-thunks";

const initialState = {
    loading: false,
    error: null,
    status: null
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOrder.pending, pending)
            .addCase(sendOrder.rejected, rejected)
            .addCase(sendOrder.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.status = payload.status;
            })
    },
});

export const { resetStatus } = orderSlice.actions;
export default orderSlice.reducer;