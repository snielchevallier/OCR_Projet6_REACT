import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => '/api/user-info',
    }),
  }),
});

export const { useGetUserInfoQuery, useLazyGetUserInfoQuery } = userApi;