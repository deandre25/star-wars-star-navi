'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import axios from 'axios';
import { GetStaticPaths } from 'next';
import { HeroService } from '@/services/hero-service';
import { ParsedUrlQuery } from 'querystring';
import HeroDetail from '@/components/HeroDetail';
import { Hero } from '@/interfaces/hero-interface';
import FilmList from '@/components/FilmList';
import ShipList from '@/components/ShipList';

// interface Params extends ParsedUrlQuery {
//   heroId: string;
// }

// export const getStaticPath: GetStaticPaths<Params> = async () => {
//   const heroes = await HeroService.getAllHeroes()

//   return {
//     paths: heroes.map(hero => ({
//       params: {
//         heroId: hero.id.toString()
//       },
//     })),
//     fallback: 'blocking'
//   }
// }

const HeroPage = () => {

  const pathname = usePathname();
  const heroId = pathname.split('/').pop();

  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    if (heroId) {
      axios.get(`https://sw-api.starnavi.io/people/${heroId}/`)
        .then(response => {
          setHero(response.data);
        })
        .catch(error => {
          console.error('Error fetching hero:', error);
        });
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-85 object-cover object-top" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
              alt="Изображение персонажа из Звездных Войн" />
          <div className="p-6">
            <HeroDetail hero={hero} />
          <div className="grid grid-cols-2 gap-4">
            <FilmList films={hero?.films} />   
            <ShipList ships={hero?.starships} />
          </div>
          </div>
        </div>
      </div>
  );
};

export default HeroPage;
