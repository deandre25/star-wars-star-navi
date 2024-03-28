import Link from "next/link";
import { FC } from "react";
import { FilmService } from "@/services/axios-service";
import { FilmTitle } from "@/interfaces/film-interface";

type FilmsIdProps = {
  films: number[];
}

const FilmList: FC<FilmsIdProps> = async ({ films }) => {
  const fetchFilmTitle: FilmTitle[] = await FilmService.getFilmTitleById(films);

  return (
    <>
      {fetchFilmTitle.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">Films</h3>
          <ul className="text-gray-300">
            {fetchFilmTitle.map(film => (
              <li key={film.id}>
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