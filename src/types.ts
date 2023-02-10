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
