import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    blogs: [],
    singleBlog: null,
};

export const getAllBlog = createAsyncThunk("posts", async () => {
    try {
        const response = await axios.get(`${API}/posts`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificBlog = createAsyncThunk("getSpecificBlog", async (id) => {
    try {
        const response = await axios.get(`${API}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const BlogSlice = createSlice({
    name: "blog_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlog.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllBlog.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.blogs = payload;
            })
            .addCase(getSpecificBlog.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.singleBlog = payload;
            })
    },
});

export default BlogSlice.reducer;