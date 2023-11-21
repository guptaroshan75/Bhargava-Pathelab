import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    mobileSlider: [],
};

export const getAllCardCarousel = createAsyncThunk("mobile-slider", async () => {
    try {
        const response = await axios.get(`${API}/mobile-slider`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const CarouselSlice = createSlice({
    name: "card_Carousel_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCardCarousel.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllCardCarousel.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.mobileSlider = payload;
            })
    },
});

export default CarouselSlice.reducer;