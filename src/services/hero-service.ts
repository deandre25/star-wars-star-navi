import { Hero } from "@/interfaces/hero-interface";
import axios from "axios";

const API_URL = 'https://sw-api.starnavi.io/';

axios.defaults.baseURL = API_URL;

export const HeroService = {
  async getAllHeroes() {
    const {data} = await axios.get('/people');
    return data.results
  },

  async getHeroesById(id: string) {
    const {data} = await axios.get(`/people`, {
      params: {
        id
      }
    });
    return data[0];
  }
}