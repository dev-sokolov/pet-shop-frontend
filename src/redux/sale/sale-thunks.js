import { createAsyncThunk } from "@reduxjs/toolkit";

import { getSaleApi } from "../../shared/api/category-api";

export const getSale = createAsyncThunk(
    "sale/get",
    async(payload, {rejectWithValue})=> {
        const {data, error} = await getSaleApi(payload);
        if(data) return data;
        return rejectWithValue(error?.response?.data?.message);
    }
);

