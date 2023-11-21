import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    pages: [],
    singlePages: null,
};

export const getAllPage = createAsyncThunk("pages", async () => {
    try {
        const response = await axios.get(`${API}/pages/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getSpecificSinglePage = createAsyncThunk("getSpecificSinglePage", async (id) => {
    try {
        const response = await axios.get(`${API}/pages/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const SingleHomePageSlice = createSlice({
    name: "single_HomePage_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllPage.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllPage.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.pages = payload;
            })
            .addCase(getSpecificSinglePage.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.singlePages = payload;
            })
    },
});

export default SingleHomePageSlice.reducer;