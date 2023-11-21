import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WooCommerce from "../../WooCommerceAPI";

const initialState = {
    isLoading: false,
    categories: [],
    specificCategory: null,
    specificCategoriesProducts: [],
    specificProduct: null,
    relatedIdProducts: [],
};

export const getAllCategories = createAsyncThunk("products_categories", async () => {
    try {
        const response = await WooCommerce.get('products/categories');
        return response.data;
    } catch (error) {
        console.log(error);
        // throw error
    }
});

export const getSpecificCategory = createAsyncThunk("getSpecificCategory", async (id) => {
    try {
        const response = await WooCommerce.get(`products/categories/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificCategoryProduct = createAsyncThunk("getSpecificCategoryProduct", async (id) => {
    try {
        const response = await WooCommerce.get(`products?category=${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificProduct = createAsyncThunk("getSpecificProduct", async (id) => {
    try {
        const response = await WooCommerce.get(`products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificProductRelatedId = createAsyncThunk("getSpecificProductRelatedId", async (ids) => {
    try {
        const getAllRelatedProducts = ids.map((id) => WooCommerce.get(`products/${id}`));
        const responses = await Promise.all(getAllRelatedProducts);
        const relatedProducts = responses.map((response) => response.data);
        return relatedProducts;
    } catch (error) {
        console.log(error);
    }
});

export const ProductCategorySlice = createSlice({
    name: "product_cat_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload;
            })
            .addCase(getSpecificCategory.fulfilled, (state, { payload }) => {
                state.isLoading = true;
                state.specificCategory = payload;
            })
            .addCase(getSpecificCategoryProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.specificCategoriesProducts = payload;
            })
            .addCase(getSpecificProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.specificProduct = payload;
            })
            .addCase(getSpecificProductRelatedId.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.relatedIdProducts = payload;
            })
    },
});

export default ProductCategorySlice.reducer;