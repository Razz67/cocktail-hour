import {} from "@reduxjs/toolkit";
import {configureStore } from "@reduxjs/toolkit"
import CocktailReducer from "./features/CocktailSlice";

export default configureStore({
    reducer: {
        app: CocktailReducer,
    }
})