import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    key_strength: [],
};

export const getAllStrength = createAsyncThunk("strength", async () => {
    try {
        const response = await axios.get(`${API}/strength`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const KeyStrengthSlice = createSlice({
    name: "key_Strength_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllStrength.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllStrength.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.key_strength = payload;
            })
    },
});

export default KeyStrengthSlice.reducer;