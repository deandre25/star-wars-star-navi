'use client';

import React, { useState, useEffect } from 'react';
import HeroList from '@/components/HeroList';
import { Hero } from '@/interfaces/hero-interface';
import { HeroService } from '@/services/hero-service';

const Home = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedHeroes = await HeroService.getAllHeroes();
        setHeroes(fetchedHeroes);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-semibold mb-4">Star Wars Heroes</h1>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default Home;
