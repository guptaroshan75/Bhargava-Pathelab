import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    history: [],
};

export const getAllHistory = createAsyncThunk("history", async () => {
    try {
        const response = await axios.get(`${API}/history`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const HistorySlice = createSlice({
    name: "history_Time_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllHistory.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllHistory.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.history = payload;
            })
    },
});

export default HistorySlice.reducer;