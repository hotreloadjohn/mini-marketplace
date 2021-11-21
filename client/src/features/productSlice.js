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
      state.filteredProducts = state.products;
      console.log(state.filteredProducts);
      // if (term === "") {
      //   state.filteredProducts = state.products;
      //   return;
      // }
      state.filteredProducts = state.filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    },
  },
});

const { reducer, actions } = productSlice;

export const getSearchedProducts = (state) => state.product.filteredProducts;
export const getProducts = (state) => state.product.products;
export const { setProduct, filterProduct } = actions;
export default reducer;
