import { createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})
const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDLE
    },
    reducers:{
        setProducts:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer