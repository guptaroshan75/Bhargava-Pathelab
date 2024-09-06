import { configureStore } from "@reduxjs/toolkit";
import NavMenuSlice from "./features/nav_Slice";
import ProductCategorySlice from "./features/product_Cat_Slice";
import KeyStrengthSlice from "./features/key_Strength_Slice";
import TestimonialsSlice from "./features/testimonials_Slice";
import BlogSlice from "./features/blog_Slice";
import BlogCategorySlice from "./features/blog_Category_Slice";
import SingleHomePageSlice  from "./features/single_HomePage_Slice";
import FooterSlice  from "./features/footer_Slice";
import HistorySlice from "./features/history_Time_Slice";
import MediaSlice from "./features/media_Slice";


const Store = configureStore({
    reducer: {
        navMenus: NavMenuSlice,
        category: ProductCategorySlice,
        strength: KeyStrengthSlice,
        testimonials: TestimonialsSlice,
        posts: BlogSlice,
        blogCategory: BlogCategorySlice,
        pages: SingleHomePageSlice,
        footers: FooterSlice,
        historyTime: HistorySlice,
        medias: MediaSlice,
    },
});

export default Store;