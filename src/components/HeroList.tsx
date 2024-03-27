import React from 'react';
import HeroItem from './HeroItem';
import { Hero } from '@/interfaces/hero-interface';

type Props = {
  heroes: Hero[]
}

const HeroList: React.FC<Props> = ({ heroes }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {heroes.map(hero => <HeroItem hero={hero} key={hero.name} />)}
    </div>
  );
};

export default HeroList;
