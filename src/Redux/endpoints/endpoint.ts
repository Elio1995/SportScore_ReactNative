import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {EventsLive, FootballTeam, League, Sport} from '../../types';

export const endpoints = createApi({
  reducerPath: 'footscoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    },
  }),
  endpoints: builder => ({
    getTeams: builder.query<Sport[], any>({
      query: () => 'sports',
    }),
    getLeagues: builder.query<League[], any>({
      query: () => 'sports/1/leagues',
    }),
    getFootballTeams: builder.query<FootballTeam[], any>({
      query: () => 'sports/1/teams',
    }),
    getLiveEvents: builder.query<EventsLive[], any>({
      query: () => 'events/live',
    }),
  }),
});

export const {
  useLazyGetTeamsQuery,
  useLazyGetLeaguesQuery,
  useLazyGetFootballTeamsQuery,
  useLazyGetLiveEventsQuery,
} = endpoints;
