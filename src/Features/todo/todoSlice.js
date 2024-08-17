import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'MedicalSlice',
  initialState: {
    items: [],
    myProducts: [],
    quantities: {}, // Initialize an empty object to store quantities
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.myProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      // Remove from state.items
      state.items = state.items.filter(item => item.id !== productId);
      // Remove from state.myProducts
      const updatedMyProducts = state.myProducts.filter(product => product.id !== productId);
      state.myProducts = updatedMyProducts;
      // Remove the quantity for the removed product
      delete state.quantities[productId];
    },
    quantityProduct: (state, action) => {
      const { id, quantity } = action.payload;
      state.quantities[id] = quantity;
    }
  }
});

export const { addToCart, removeFromCart, quantityProduct } = todoSlice.actions;
export default todoSlice.reducer;