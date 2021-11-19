import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProduct: (state, action) => {
      const term = action.payload;
      if (term === "") {
        state.filteredProducts = state.products;
        return;
      }
      state.filteredProducts = state.filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    },
  },
});

const { reducer, actions } = productSlice;

export const getProducts = (state) => state.product.filteredProducts;
export const { setProduct, filterProduct } = actions;
export default reducer;
