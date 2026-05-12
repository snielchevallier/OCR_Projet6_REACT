import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
      query: () => '/api/user-activity?startWeek=2025-01-01T10:30:00.000Z&endWeek=2030-01-01T10:30:00.000Z',
    }),
  }),
});

export const { useGetUserActivityQuery, useLazyGetUserActivityQuery } = activityApi;