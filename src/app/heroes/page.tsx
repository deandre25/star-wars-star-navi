'use client';

import HeroList from '@/components/HeroList';
import { Hero } from '@/interfaces/hero-interface';
import { HeroService } from '@/services/axios-service';
import { useEffect, useState } from 'react';


const Home = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchHeroes = async (page: number) => {
    try {
      const heroesData: Hero[] = await HeroService.getAllHeroes(page);
      setHeroes(heroesData);
    } catch (error) {
      console.error('Error fetching heroes:', error);
    }
  };

  useEffect(() => {
    fetchHeroes(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-semibold mb-4">Star Wars Heroes</h1>
      <HeroList heroes={heroes} />
      <div className="flex justify-center mt-4">
      <button
          className={`px-4 py-2 ml-2 ${currentPage === 1 ? 'bg-gray-800 cursor-not-allowed' : 'bg-blue-500 text-white'} rounded`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className={`px-4 py-2 ml-2 ${currentPage === 9 ? 'bg-gray-800 cursor-not-allowed' : 'bg-blue-500 text-white'} rounded`}
          onClick={handleNextPage}
          disabled={currentPage === 9}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
