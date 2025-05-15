import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategoryApi } from "../../shared/api/category-api";


export const getAllCategory = createAsyncThunk(
    "category/getAll",
    async(_, {rejectWithValue})=> {
        const {data, error} = await getAllCategoryApi();
        if(data) return data;
        return rejectWithValue(error?.response?.data?.message);
    }
);