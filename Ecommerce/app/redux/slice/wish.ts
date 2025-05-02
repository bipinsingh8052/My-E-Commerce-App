import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

// Define the shape of the cart item
interface CartItem {
    id: string; // or number, depending on your item ID type
    name: string;
    price: number;
}

// Define the shape of the cart state
interface CartState {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}

// Define the initial state
const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

// Create the cart slice
const cartSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addWishList: (state, action: PayloadAction<CartItem>) => {
        //   console.log(state.items,action.payload);
          const cartData= state.items.filter(key=>key.id==action.payload.id);
        //   console.log(cartData,"this is my cart list")
          if (cartData.length>=1)
          {
            state.items=state.items.filter(key=>key.id!=action.payload.id)
            // console.log(data,"thiaia ")
               Toast.show({
                              type: 'error', // 'success', 'error', 'info'
                              text1: "Remove cart from your wishlist Cart",
                              position: 'top', // 'top', 'bottom', 'center'
                              visibilityTime: 4000, // Duration in milliseconds
                              autoHide: true, // Automatically hide after visibilityTime
                            });
          }
          else 
          {
              state.items.push(action.payload);
              Toast.show({
                type: 'error', // 'success', 'error', 'info'
                text1: "add in Your WishList",
                position: 'top', // 'top', 'bottom', 'center'
                visibilityTime: 4000, // Duration in milliseconds
                autoHide: true, // Automatically hide after visibilityTime
              });
          }
        },
        removeWishList: (state, action: PayloadAction<string>) => { // Assuming itemId is a string
        //   console.log(action.payload)  
          state.items=state.items.filter(key=>key.id!=action.payload)
        //   console.log(state.items)  
        }
    },
});

// Export actions and reducer
export const { addWishList, removeWishList} = cartSlice.actions;
export default cartSlice.reducer;