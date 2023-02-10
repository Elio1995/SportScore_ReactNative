export type Sport = {
  id: Number;
  name: String;
  name_translations: {};
};

export type League = {
  end_date: Date;
  facts: [];
  has_logo: Boolean;
  host: {};
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
