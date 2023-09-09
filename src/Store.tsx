import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./componenets/blogs/BlogReducer";


export const store = configureStore({
    reducer  : {
        Blogs : BlogReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch ;

export default store;