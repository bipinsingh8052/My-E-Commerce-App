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
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
          console.log(state.items,action.payload);
          const cartData= state.items.filter(key=>key.id==action.payload.id);
          if (cartData.length>=1)
          {
              alert("Product Aleready Added!!!");
          }
          else 
          {
              state.items.push(action.payload);
          }
        },
        removeFromCart: (state, action: PayloadAction<string>) => { // Assuming itemId is a string
          console.log(action.payload)  
          state.items=state.items.filter(key=>key.id!=action.payload)
          console.log(state.items)  
        },
        qntyIncrease:(state, actions)=>{
          for (var i=0; i<state.items.length; i++)
          {
            if (state.items[i].id==actions.payload.id)
            {
                state.items[i].qty++;
            }
          }
        },
        qntyDecrease:(state, actions)=>{
          for (var i=0; i<state.items.length; i++)
          {
            if (state.items[i].id==actions.payload.id)
            {
                if (state.items[i].qty<=1)
                {
                    alert("Quantity not less than 1 ");
                }
                else 
                {
                    state.items[i].qty--;
                }
                
            }
          }
        }
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart ,qntyIncrease,qntyDecrease} = cartSlice.actions;
export default cartSlice.reducer;