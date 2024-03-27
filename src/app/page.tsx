import Link from 'next/link';

const Home = () => {
  return (
    <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to the world of Star Wars!</h1>
        <p className="text-lg mb-8">
          Immerse yourself in the exciting world of the galactic saga and travel with your favorite heroes.
        </p>
        <Link href={'/heroes'} className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition duration-300 ease-in-out">
          Go to heroes
        </Link>
    </div>
  );
};

export default Home;
