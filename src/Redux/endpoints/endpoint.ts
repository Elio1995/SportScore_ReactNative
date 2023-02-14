import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {EventsLive, FootballTeam, League, Sport} from '../../types';

export const endpoints = createApi({
  reducerPath: 'footscoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sportscore1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '4cc1b989femsh61bfdfc65124ab4p1994b5jsne7006f0dbe7c',
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
