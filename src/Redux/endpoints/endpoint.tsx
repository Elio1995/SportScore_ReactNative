import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Sport {
  id: Number;
  name: String;
  name_translations: {};
}

interface League {
  end_date: Date;
  facts: [];
  has_logo: Boolean;
  host: {};
  id: Number;
  logo: String;
  most_count: 7;
  name_translations: {};
  priority: Number;
  section: {};
  section_id: Number;
  slug: String;
  sport: {};
  sport_id: Number;
  start_date: Date;
  tennis_points: Number;
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
    getLeagues: builder.query<League[], any>({
      query: () => 'sports/1/leagues',
    }),
  }),
});

export const {useLazyGetTeamsQuery, useLazyGetLeaguesQuery} = endpoints;
