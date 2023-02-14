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

interface FootballTeam {
  category_id: Number;
  country: String;
  country_code: String;
  details: null;
  flag: String;
  foundation: null;
  gender: String;
  has_logo: Boolean;
  has_sub: Boolean;
  id: Number;
  is_nationality: false;
  logo: String;
  manager_id: Number;
  name: String;
  name_code: String;
  name_full: String;
  name_short: String;
  name_translations: {en: String};
  slug: String;
  sport_id: Number;
  venue_id: Number;
}

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
  }),
});

export const {
  useLazyGetTeamsQuery,
  useLazyGetLeaguesQuery,
  useLazyGetFootballTeamsQuery,
} = endpoints;
