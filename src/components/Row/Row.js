import React, { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utils/Utils";

const Row = ({ title, fetchUrl, isPoster }) => {
  const [movies, setMovies] = useState([]);

  //Appel de la data pour les rows de l'application
  useEffect(() => {
    fetchData(fetchUrl).then((response) => {
      const {
        data: { results },
      } = response;

      setMovies(results);
    });
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isPoster ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.title || movie?.original_title || movie?.name}
              className='row__images--image'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
