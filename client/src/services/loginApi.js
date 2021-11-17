import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    doLogin: builder.mutation({
      query(body) {
        return {
          url: `login`,
          method: "POST",
          body,
        };
      },
    }),
    doLogout: builder.query({
      query: () => `/logout`,
    }),
  }),
});

export const { useDoLoginMutation, useDoLogoutQuery } = loginApi;
