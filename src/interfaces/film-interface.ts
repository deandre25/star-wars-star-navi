export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[]; 
  starships: number[];
  vehicles: string[]; 
  characters: string[];
  planets: string[]; 
  url: string;
  created: string;
  edited: string;
}

export interface FilmTitle {
  id: number;
  title: string;
}
