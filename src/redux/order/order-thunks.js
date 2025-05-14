import { createAsyncThunk } from "@reduxjs/toolkit";

import { sendOrderApi } from "../../shared/api/category-api";

export const sendOrder = createAsyncThunk(
    "order/send",
    async(payload, {rejectWithValue})=> {
        const {data, error} = await sendOrderApi(payload);
        if(data) return data;
        return rejectWithValue(error?.response?.data?.message);
    }
);