import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const getAllCategoryApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/categories/all");
    return data;
})

export const getAllProductsApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/products/all");
    return data;
})

export const getProductApi = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/products/${id}`);
    return data;
})

export const getProductsCategoryApi = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/categories/${id}`);
    return data;
})

export const sendOrderApi = requestDecorator(async (payload) => {
    const { data } = await backendInstance.post("/order/send", payload);
    return data;
})

export const getSaleApi = requestDecorator(async (payload) => {
    const { data } = await backendInstance.post("/sale/send", payload);
    return data;
})


