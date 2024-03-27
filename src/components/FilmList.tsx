import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type Props = {
  films?: number[] | null;
}

const FilmList: FC<Props> = ({ films }) => {
  const [filmData, setFilmData] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    if (films && films.length > 0) {
      const fetchData = async () => {
        const promises = films.map(async (id, index) => {
          try {
            const delay = index * 100;
            await new Promise(resolve => setTimeout(resolve, delay));
            
            const response = await axios.get(`https://sw-api.starnavi.io/films/${id}/`);
            const title = response.data.title;
            return { id, title };
          } catch (error) {
            console.error(`Error fetching film with ID ${id}:`, error);
            return { id, title: '' };
          }
        });
  
        const titles = await Promise.all(promises);
        setFilmData(titles);
      };
  
      fetchData();
    }
  }, [films]);

  return (
    <>
      {filmData.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">Films</h3>
          <ul className="text-gray-300">
            {filmData.map(film => (
              <li>
                <Link href={`/films/${film.id}`} key={film.id} className="hover:text-yellow-500">
                  <i>
                    {film.title}
                  </i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FilmList;