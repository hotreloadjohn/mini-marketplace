import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "createproduct",
        method: "POST",
        body: data,
      }),
    }),

    getAllProducts: builder.mutation({
      query: () => "getAllProducts",
    }),

    getProductDetailsById: builder.mutation({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsMutation,
  useGetProductDetailsByIdMutation,
} = productApi;
