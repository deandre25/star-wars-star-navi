export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // Используйте дату или строку, в зависимости от вашего предпочтения
  species: string[]; // Массив ссылок на ресурсы видов, если они доступны
  starships: number[]; // Массив ссылок на ресурсы кораблей, если они доступны
  vehicles: string[]; // Массив ссылок на ресурсы транспортных средств, если они доступны
  characters: string[]; // Массив ссылок на ресурсы персонажей, если они доступны
  planets: string[]; // Массив ссылок на ресурсы планет, если они доступны
  url: string;
  created: string;
  edited: string;
}
