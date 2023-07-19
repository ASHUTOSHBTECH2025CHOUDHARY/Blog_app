import {createSlice,configureStore} from "@reduxjs/toolkit"

const authslice=createSlice({
    name:"auth",
    initialState:{isloggedin:false},
    reducers:{
        login(state){
            state.isloggedin=true
        },
        logout(state){
            localStorage.removeItem("useId")
            state.isloggedin=false
        }
    }
})

export const authActions=authslice.actions

export const store=configureStore({
    reducer:authslice.reducer
})