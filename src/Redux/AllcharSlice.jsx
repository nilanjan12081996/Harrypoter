import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    allChar:[],
    loading:false,
    error:false
}
export const getAllChar=createAsyncThunk(
    'all',
    async()=>{
        const res=await axios.get('https://hp-api.onrender.com/api/characters')
        console.log(res?.data);
        return res?.data
    }
)
export const AllcharSlice=createSlice(
{
    name:'fetchall',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllChar.pending,(state)=>{
            state.loading=true
            state.error=false
        }).addCase(getAllChar.fulfilled,(state,action)=>{
            state.loading=false
            state.allChar=action?.payload
            state.error=false
        }).addCase(getAllChar.rejected,(state)=>{
            state.loading=false
            state.error=true
        })
    }

}
)