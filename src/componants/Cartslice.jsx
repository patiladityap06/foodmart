import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
  name: "cart",
  initialState: {
  cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, count } = action.payload;

      if (count <= 0) return;
         const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += count;
      } else {
        state.cartItems.push({ ...product, quantity: count });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
 
});

export const { addToCart, removeFromCart } = Cartslice.actions;


export const selectTotalAmount = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default Cartslice.reducer;