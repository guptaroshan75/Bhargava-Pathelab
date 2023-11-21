import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API";

const initialState = {
    isLoading: false,
    footerMenuTitle: [],
    footerMenus: [],
};

export const getAllFooterMenuTitle = createAsyncThunk("footer-menu-title", async (ids) => {
    try {
        const getAllFooterMenuTitle = ids.map((id) => axios.get(`${API}/menu_title/${id}`));
        const responses = await Promise.all(getAllFooterMenuTitle);
        const footerMenuTitle = responses.map((response) => response.data);
        return footerMenuTitle;
    } catch (error) {
        console.log(error);
    }
});

export const getAllFooterMenu = createAsyncThunk("footer-menu", async (ids) => {
    try {
        const getAllFooterMenu = ids.map((id) => axios.get(`${API}/menu/${id}`));
        const responses = await Promise.all(getAllFooterMenu);
        const footerMenu = responses.map((response) => response.data);
        return footerMenu;
        // const response = await axios.get(`${API}/menu/${id}`);
        // return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const FooterSlice = createSlice({
    name: "footer_Slice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllFooterMenuTitle.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getAllFooterMenuTitle.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.footerMenuTitle = payload;
            })
            .addCase(getAllFooterMenu.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.footerMenus = payload;
            })
    },
});

export default FooterSlice.reducer;

// {footerMenuTitle.map((footerTitle, index) => {
//     const childMenus = footerMenus[index] || [];
//     return (
//         <div className='col-lg-4 col-md-6 col-sm-12 col-12' key={footerTitle?.id}>
//             <div className='d-flex justify-content-between footer-menu'>
//                 <h4 className='position-relative'>{footerTitle?.name}</h4>
//             </div>
//             <div className='nav-menu mt-3'>
//                 {childMenus.map(menu => (
//                     <NavLink
//                         className='nav-link'
//                         to={`/menu/${menu.id}`}
//                         key={menu.id}
//                         style={({ isActive }) => ({
//                             color: isActive ? '#ffff01' : '#656565',
//                         })}
//                     >
//                         <BsArrowRight className='icon-footer me-2' />
//                         {menu.title}
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     );
// })}