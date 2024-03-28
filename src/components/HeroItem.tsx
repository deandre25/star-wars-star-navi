import Link from 'next/link';
import React from 'react';
import { Hero } from '@/interfaces/hero-interface';

type HeroItemProps = {
  hero: Hero;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero }) => {
  const id = hero.url ? hero.url.match(/\/(\d+)\/$/)?.[1] : '1';

  return (
    <Link href={`/heroes/${id}`} key={id} className="bg-gray-900 p-4 rounded-lg border border-yellow-500 hover:bg-gray-800 transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-2 text-yellow-500">{hero.name}</h2>
      <p className="text-gray-300">Height: {hero.height}</p>
      <p className="text-gray-300">Mass: {hero.mass}</p>
  </Link>
  );
};

export default HeroItem;
