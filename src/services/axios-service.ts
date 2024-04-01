import { Film, FilmTitle } from "@/interfaces/film-interface";
import { ShipTitle, Starship } from "@/interfaces/starship-interface";
import axios from "axios";

const API_URL = 'https://sw-api.starnavi.io/';

axios.defaults.baseURL = API_URL;

const filmTitleCache: { [id: number]: FilmTitle } = {};

export const HeroService = {
  async getAllHeroes(page: number = 1) {
    try {
      const {data} = await axios.get(`/people?page=${page}`);
      return data.results
    } catch (err) {
      console.error('Error fetching hero:', err);
      return err;
    }
  },

  async getHeroesById(id: string) {
    try {
      const {data} = await axios.get(`/people/${id}`);
      return data;
    } catch (err) {
      console.error('Error fetching hero:', err);
      return err;
    }
  }
}

export const FilmService = {
  async getFilmById(id: string) {
    try {
      const {data} = await axios.get(`/films/${id}`);
      return data;
    } catch (err) {
      console.error('Error fetching film article:', err);
      return err;
    }
  },

  async getFilmTitleById(films: number[]) {
    const filmData: FilmTitle[] = [];
    try {
      for (const id of films) {
        if (filmTitleCache[id]) {
          filmData.push(filmTitleCache[id]);
        } else {
          const film = await axios.get<Film>(`/films/${id}`);
          const filmTitle = { id, title: film.data.title };
          filmData.push(filmTitle);
          filmTitleCache[id] = filmTitle;
        }
      }
      return filmData;
    } catch (err) {
      console.error('Error fetching film title:', err);
      return err;
    }
  }
}

export const ShipService = {
  async getShipById(id: string) {
    try {
      const {data} = await axios.get(`/starships/${id}`);
      return data;
    } catch (err) {
      console.error('Error fetching starship article:', err);
      return err;
    }
  },

  async getShipTitleById(ships: number[]) {
    try {
      const promises = ships.map(async (id, index) => {
        const delay = index * 100;
        await new Promise(resolve => setTimeout(resolve, delay));
        const ship = await axios.get<Starship>(`/starships/${id}`);
        return { id, name: ship.data.name };
      });

      const shipData: ShipTitle[] = await Promise.all(promises);
      return(shipData);
    } catch (err) {
      console.error('Error fetching starship title:', err);
      return err;
    }
  }
}