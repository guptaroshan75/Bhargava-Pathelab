import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from '@emailjs/browser';

const initialState = {
    enquiry: [],
    isLoading: false,
};

const serviceID = 'service_m3al91a'
const templateID = 'template_j4oetu4'
const publicKey = 'vhD-D6M1eh1LYXz_v'

export const enquiryDetails = createAsyncThunk("wpcf7_contact_form", async (templateParams) => {
    try {
        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
        console.log('Email Sent SuccessFully', response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
);

export const EnquirySlice = createSlice({
    name: "enquiry_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(enquiryDetails.fulfilled, (state) => {
                state.isLoading = false;
            })
    },
});

export default EnquirySlice.reducer;