import { HeroService } from '@/services/axios-service';
import HeroDetail from '@/components/HeroDetail';
import { Hero } from '@/interfaces/hero-interface';
import FilmList from '@/components/FilmList';
import ShipList from '@/components/ShipList';

const HeroPage = async ({ params }: { params: { id: string } }) => {
  const hero: Hero = await HeroService.getHeroesById(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-85 object-cover object-top" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
              alt="Star Wars baner" />
          <div className="p-6">
            <HeroDetail hero={hero} />
          <div className="grid grid-cols-2 gap-4">
            <FilmList films={hero.films} />   
            <ShipList ships={hero.starships} />
          </div>
          </div>
        </div>
      </div>
  );
};

export default HeroPage;