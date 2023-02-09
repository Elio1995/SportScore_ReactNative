import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Sport {
  id: Number;
  name: String;
  name_translations: {};
}

export const endpoints = createApi({
  reducerPath: 'footscoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sportscore1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '979a36c7camsh7f2351cd4644296p1a673bjsn0af29bb0089f',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
    },
  }),
  endpoints: builder => ({
    getTeams: builder.query<Sport[], any>({
      query: () => 'sports',
    }),
  }),
});

export const {useLazyGetTeamsQuery} = endpoints;
