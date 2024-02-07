import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    singleChar:[],
    loading:false,
    error:false
}
export const getSingleChar=createAsyncThunk(
    'oneChar',
    async(id)=>{
        const res= await axios.get(`https://hp-api.onrender.com/api/character/${id}`)
        console.log(res?.data);
        return res?.data
    }
)
export const SingleCharSlice=createSlice(
    {
        name:'single',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(getSingleChar.pending,(state)=>{
                state.loading=true
                state.error=false
            }).addCase(getSingleChar.fulfilled,(state,action)=>{
                state.loading=false
                state.singleChar=action.payload
                state.error=false
            }).addCase(getSingleChar.rejected,(state)=>{
                state.error=true
                state.loading=false
            })
        }
    }
)