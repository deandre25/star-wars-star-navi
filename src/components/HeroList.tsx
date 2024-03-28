import React from 'react';
import HeroItem from './HeroItem';
import { Hero } from '@/interfaces/hero-interface';

type HeroListProps = {
  heroes: Hero[];
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {heroes && heroes.map(hero => <HeroItem hero={hero} key={hero.name} />)}
    </div>
  );
};

export default HeroList;
