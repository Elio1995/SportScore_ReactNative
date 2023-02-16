import {GestureResponderEvent} from 'react-native';

export type Sport = {
  id: Number;
  name: String;
  name_translations: {};
};

export type League = {
  end_date: Date;
  facts: [];
  has_logo: Boolean;
  host: {flag: String};
  id: Number;
  logo: String;
  most_count: 7;
  name_translations: {en: String};
  priority: Number;
  section: {};
  section_id: Number;
  slug: String;
  sport: {};
  sport_id: Number;
  start_date: Date;
  tennis_points: Number;
};

export type FootballTeam = {
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
};

export type EventsLive = {
  aggregated_winner_code: null;
  attendance: null;
  away_score: {current: Number};
  away_team: {name: String};
  away_team_id: Number;
  cards_code: null;
  challenge: {};
  challenge_id: Number;
  coverage: null;
  cup_match_in_round: null;
  cup_match_order: null;
  default_period_count: Number;
  event_data_change: null;
  first_supply: Number;
  ground_type: String;
  home_score: {current: Number};
  home_team: {name: String};
  home_team_id: Number;
  id: Number;
  lasted_period: String;
  league: {};
  league_id: Number;
  main_odds: {};
  medias_count: null;
  name: String;
  periods: {};
  periods_time: null;
  priority: Number;
  referee_id: null;
  result_only: false;
  round_info: {};
  round_number: Number;
  season: {};
  season_id: Number;
  section: {};
  series_count: Number;
  slug: String;
  sport: {name: String};
  sport_id: Number;
  start_at: String;
  status: String;
  status_lineup: null;
  status_more: String;
  time_details: {currentPeriodStartTimestamp: Number};
  venue_id: Number;
  winner_code: Number;
};

export interface controls {
  currentTime: number | any;
  setCurrentTime: (event: any) => void;
  onPlay: (event: GestureResponderEvent) => void;
  playing: boolean;
  isLoading: boolean;
  handleForward: (event: GestureResponderEvent) => void;
  handleRewind: (event: GestureResponderEvent) => void;
  duration: number | any;
  // onSlidingStart: (event: GestureResponderEvent) => void;
  // onSlidingComplete: (event: GestureResponderEvent) => void;
  title: string;
  error: string | null;
  fullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>> | any;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  handleLive: Function | any;
  type: string;
  onSlidingStartSlider: (event: any) => void;
  onSlidingCompleteSlider: (event: any) => void;
}
