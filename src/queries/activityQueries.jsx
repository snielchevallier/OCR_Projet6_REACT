import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUserActivity: build.query({
      queryFn: async (arg, { getState }, _extraOptions, fetchWithBase) => {
        const state = getState();
        const now = new Date().toISOString();
        const inscriptionDate = new Date(state.user.profile.createdAt).toISOString();
        const result = await fetchWithBase( 
          `/api/user-activity?startWeek=${inscriptionDate}&endWeek=${now}`
        );

        return result.error ? { error: result.error } : { data: result.data };
      },
    }),
  }),
});

export const { useGetUserActivityQuery, useLazyGetUserActivityQuery } = activityApi;