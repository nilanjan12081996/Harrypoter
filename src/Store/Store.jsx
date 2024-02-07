import { configureStore } from "@reduxjs/toolkit";
import { AllcharSlice } from "../Redux/AllcharSlice";
import { SingleCharSlice } from "../Redux/SingleCharSlice";


export const Store=configureStore(
    {
        reducer:{
            chars:AllcharSlice.reducer,
            sing:SingleCharSlice.reducer
        }
    }
)