import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message:[]
  },
  reducers: {
    addtocart(state, action: PayloadAction<string>) {
      console.log(action.payload);
    },
    removeCart(state,action:PayloadAction<string>){
      console.log(action.payload);
    }
  }
})

export const {addtocart,removeCart } = messageSlice.actions
export default messageSlice.reducer