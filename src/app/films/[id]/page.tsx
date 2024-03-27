'use client'

import axios from 'axios';
import { Film } from '@/interfaces/film-interface';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ShipList from '@/components/ShipList';
import imagesData from '../../api/images.json';

const FilmPage = () => {
  const pathname = usePathname();
  const filmId = pathname.split('/').pop();

  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    if (filmId) {
      axios.get(`https://sw-api.starnavi.io/films/${filmId}/`)
        .then(response => {
          setFilm(response.data);
        })
        .catch(error => {
          console.error('Error fetching hero:', error);
        });
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-rows-2 justify-center m-2">
            {imagesData.films.map(item => item.episode_id === film?.episode_id && (
              <img src={item.image} alt={item.title} className="w-auto h-72" />
            ))}
            <ShipList ships={film?.starships} />
          </div>
          

          <div className="p-5">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-300">{film?.title}</h2>
            <p className="text-lg mb-4 text-gray-300"><strong>Episode:</strong> {film?.episode_id}</p>
            <p className="text-lg mb-4 text-gray-300"><strong>Director:</strong> {film?.director}</p>
            <p className="text-lg mb-4 text-gray-300"><strong>Producer:</strong> {film?.producer}</p>
            <p className="text-lg mb-4 text-gray-300"><strong>Release Date:</strong> {film?.release_date}</p>
            <p className="text-lg mb-4 text-gray-300"><strong>Opening Crawl:</strong> {film?.opening_crawl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPage;

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
