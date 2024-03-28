import { Hero } from '@/interfaces/hero-interface';
import React from 'react';

interface HeroDetailProps {
  hero: Hero;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ hero }) => {
  return (
    <>
      {hero && (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-yellow-300">{hero.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Physical Attributes</h3>
              <ul className="text-gray-300">
                <li><strong>Height:</strong> {hero.height}</li>
                <li><strong>Mass:</strong> {hero.mass}</li>
                <li><strong>Eye Color:</strong> {hero.eye_color}</li>
                <li><strong>Hair Color:</strong> {hero.hair_color}</li>
                <li><strong>Skin Color:</strong> {hero.skin_color}</li>
                <li><strong>Gender:</strong> {hero.gender}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Biographical Information</h3>
              <ul className="text-gray-300">
                <li><strong>Birth Year:</strong> {hero.birth_year}</li>
                <li><strong>Homeworld:</strong> {hero.homeworld}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeroDetail;
