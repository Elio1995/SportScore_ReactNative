import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {EventsLive, FootballTeam, League, Sport} from '../../types';

export const endpoints = createApi({
  reducerPath: 'footscoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sportscore1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '82f3075388mshc3f883323500a8ep12ffd3jsn69497014d19e',
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
