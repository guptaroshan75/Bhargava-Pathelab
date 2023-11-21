import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    medias: [],
};

export const getSpecificStrengthMedia = createAsyncThunk("getSpecificStrengthMedia", async (ids) => {
    try {
        const responses = await Promise.all(ids.map((id) => axios.get(`${API}/media/${id}`)));
        const medias = responses.map((response) => response.data);
        return medias;
    } catch (error) {
        console.log(error);
    }
});

export const MediaSlice = createSlice({
    name: "media_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSpecificStrengthMedia.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getSpecificStrengthMedia.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.medias = payload;
            })
    },
});

export default MediaSlice.reducer;