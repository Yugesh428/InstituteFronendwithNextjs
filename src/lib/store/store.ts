
import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import studentSlice from './studentSlice'

const store = configureStore({
    reducer : {
        userSlice : userSlice, 
        studentSlice : studentSlice, 
        teacherSlice : 
    }
})



export default store 

// dispatch ko type --> paxi kaam lagxa hamilai 
// dispatch(setName()) --> dispatch() : AppDispatch
export type AppDispatch =  typeof store.dispatch
