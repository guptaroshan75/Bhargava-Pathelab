import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    menus: [],
};

export const getAllMenu = createAsyncThunk("primary-menu", async () => {
    try {
        const response = await axios.get(`${API}/primary-menu`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const NavMenuSlice = createSlice({
    name: "nav_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllMenu.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllMenu.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.menus = payload;
            })
    },
});

export default NavMenuSlice.reducer;