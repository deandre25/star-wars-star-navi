export interface Hero {
  id: string;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  homeworld: string;
  films?: [];
  species: [];
  starships: [];
  vehicles: [];
  created: string;
  edited: string
  height: string;
  mass: string;
  url: string;
}

export interface HeroData {
  heroes: Hero[];
}

export interface HeroDataSingle {
  hero: Hero;
}