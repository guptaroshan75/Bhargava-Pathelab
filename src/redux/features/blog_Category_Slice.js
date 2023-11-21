import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    blogcategories: [],
    blogcategory: null,
};

export const getAllBlogCat = createAsyncThunk("categories", async () => {
    try {
        const response = await axios.get(`${API}/categories/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificBlogCat = createAsyncThunk("getSpecificBlogCat", async (category) => {
    try {
        const response = await axios.get(`${API}/categories/${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const BlogCategorySlice = createSlice({
    name: "blog_Category_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogCat.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogCat.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.blogcategories = payload;
            })
            .addCase(getSpecificBlogCat.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.blogcategory = payload;
            })
    },
});

export default BlogCategorySlice.reducer;