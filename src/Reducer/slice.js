import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
  name:'cart',
  initialState:0,

  reducers:{
    add:(state,action)=>{
      const res=state+=action.payload
      localStorage.setItem("cart" ,state)
      return res
    },
    remove:(state,action)=>{
      const res=state-=action.payload
      localStorage.setItem("cart" ,state)
      return res
    }
  }

})

export const{add,remove}=cartSlice.actions
export default cartSlice.reducer

