
import { createSlice } from "@reduxjs/toolkit"

export const recipeSlice = createSlice({
    name: "recipe",
    initialState: null,
    reducers: {
        addRecipe: function(state,action){
            return action.payload
        },
        removeRecipe: function(state,action){
            return null
        }
    }
})


export const { addRecipe,removeRecipe } = recipeSlice.actions
export default recipeSlice.reducer
