'use client'

import { useState, useEffect, FC } from 'react';
import HeroList from '@/components/HeroList';
import { Hero } from '@/interfaces/hero-interface';
import { HeroService } from '@/services/axios-service';

type Props = {
  initialHeroes: Hero[]
}

const pagesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Home: FC<Props> = ({ initialHeroes }) => {
  const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
  
  const handlePageClick = async (page: number) => {
    try {
      const newHeroes: Hero[] = await HeroService.getAllHeroes(page);
      setHeroes(newHeroes);
    } catch (error) {
      console.error('Error fetching heroes:', error);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-semibold mb-4">Star Wars Heroes</h1>
      <HeroList heroes={heroes} />
      <div>
        {pagesNumber.map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 mx-1 bg-blue-500 text-white`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export async function fetchData() {
  try {
    const initialHeroes: Hero[] = await HeroService.getAllHeroes(1);
    return { props: { initialHeroes } };
  } catch (error) {
    console.error('Error fetching initial heroes:', error);
    return { props: { initialHeroes: [] } };
  }
}

export default Home;
