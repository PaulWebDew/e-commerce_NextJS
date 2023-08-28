import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk('Products/fetchProducts',async ()=>{
    const {data} = await axios.get('/api/product/');
   return data;
})
interface IOneProduct {
   _id:String
   prodDescr:String,
   prodName:String,
   prodPrice:String,
   prodImages:String[],

}
export interface IproductState{
   value:IOneProduct[],
   status:'loading'|'success'|'error',
}

const initialState:IproductState = {
   value:[],
   status:'loading',
}

const productSlice = createSlice({
   name:'Products',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder.addCase(fetchProducts.pending, (state, {payload})=>{
         console.log('pending')
      }),
      builder.addCase(fetchProducts.fulfilled, (state, {payload}:PayloadAction<IOneProduct[]>)=>{
         state.value = payload;
         state.status= 'success';
      })
      builder.addCase(fetchProducts.rejected, (state)=>{
console.log('work')
      })
   }
})


export default productSlice.reducer;