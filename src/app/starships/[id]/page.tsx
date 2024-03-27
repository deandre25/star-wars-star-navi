'use client'

// pages/films/[filmId].tsx

import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { Film } from '@/interfaces/film-interface';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ShipList from '@/components/ShipList';
import { Starship } from '@/interfaces/starship-interface';
import FilmList from '@/components/FilmList';

const StarshipsPage = () => {
  const pathname = usePathname();
  const shipId = pathname.split('/').pop();

  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    if (shipId) {
      axios.get(`https://sw-api.starnavi.io/starships/${shipId}/`)
        .then(response => {
          setStarship(response.data);
        })
        .catch(error => {
          console.error('Error fetching hero:', error);
        });
    }
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-300">{starship?.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Technical Specifications</h3>
              <ul className="text-gray-300">
                <li>Model: {starship?.model}</li>
                <li>Starship Class: {starship?.starship_class}</li>
                <li>Manufacturer: {starship?.manufacturer}</li>
                <li>Cost in Credits: {starship?.cost_in_credits}</li>
                <li>Length: {starship?.length}</li>
                <li>Crew: {starship?.crew}</li>
                <li>Passengers: {starship?.passengers}</li>
                <li>Max Atmosphering Speed: {starship?.max_atmosphering_speed}</li>
                <li>Hyperdrive Rating: {starship?.hyperdrive_rating}</li>
                <li>MGLT: {starship?.MGLT}</li>
                <li>Cargo Capacity: {starship?.cargo_capacity}</li>
                <li>Consumables: {starship?.consumables}</li>
              </ul>
            </div>
            <FilmList films={starship?.films} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipsPage;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { filmId } = params;
//   const response = await axios.get(`https://sw-api.starnavi.io/films/${filmId}/`);
//   const film: Film = response.data;

//   return {
//     props: {
//       film,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Здесь вы можете определить пути для всех доступных фильмов,
//   // чтобы Next.js знал, какие страницы предварительно генерировать
//   return {
//     paths: [],
//     fallback: 'blocking', // или 'true', если необходима генерация страницы при запросе
//   };
// };
