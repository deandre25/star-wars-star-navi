import HeroList from '@/components/HeroList';
import { HeroService } from '@/services/axios-service';

const Home = async () => {
  const heroes = await HeroService.getAllHeroes();

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-semibold mb-4">Star Wars Heroes</h1>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default Home;
