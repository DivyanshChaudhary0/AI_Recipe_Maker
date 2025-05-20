
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import recipeReducer from "./recipeSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        recipe: recipeReducer
    }
})

