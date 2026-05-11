import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryWithErrorHandling = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQueryWithErrorHandling(args, api, extraOptions)

    return result
  },
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: '/api/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi