import { createSlice } from "@reduxjs/toolkit";
import { bloginitialState as initialState } from "./BlogState";
import { RootState } from "../../Store";



const BlogSlice = createSlice({
    name : 'Blogs',
    initialState,
    reducers : {

    }
})

export const selectBlog = (state : RootState) => state.Blogs.Blogs;

export default BlogSlice.reducer;