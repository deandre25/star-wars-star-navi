import { HeroService } from '@/services/axios-service';
import HeroDetail from '@/components/HeroDetail';
import { Hero } from '@/interfaces/hero-interface';
import FilmList from '@/components/FilmList';
import ShipList from '@/components/ShipList';
import HeroGraph from '@/components/HeroGraph';

const HeroPage = async ({ params }: { params: { id: string } }) => {
  const hero: Hero = await HeroService.getHeroesById(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <HeroDetail hero={hero} />
            <div className="grid grid-cols-2 gap-4">
              <FilmList films={hero.films} />   
              <ShipList ships={hero.starships} />
            </div>
          </div>
          <HeroGraph hero={hero} />
        </div>
      </div>
  );
};

export default HeroPage;