// services/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserInfo } from "../features/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
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
    googleLogin: builder.mutation({
      query: (token) => ({
        url: "google-login",
        method: "POST",
        body: { token },
      }),
      async onQueryStarted(token, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserInfo({ user: data.user, token: data.token }));
        } catch (err) {
          console.error("Google login failed:", err);
        }
      },
    }),
  }),
});

export const { useGoogleLoginMutation } = authApi;
