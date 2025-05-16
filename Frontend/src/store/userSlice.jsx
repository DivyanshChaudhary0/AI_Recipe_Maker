
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: function(state,action){
            state = action.payload
        },
        removeUser: function(state,action){
            return null;
        }
    }
})

export const { addUser, removeUser } = reducers.actions;
export default userSlice.reducer
