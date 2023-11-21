import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    testimonials: [],
};

export const getAllTestimonials = createAsyncThunk("testimonials", async () => {
    try {
        const response = await axios.get(`${API}/testimonials`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const TestimonialsSlice = createSlice({
    name: "testimonials_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllTestimonials.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllTestimonials.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.testimonials = payload;
            })

    },
});

export default TestimonialsSlice.reducer;