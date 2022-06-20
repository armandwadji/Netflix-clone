import React, { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utils/Utils";
import Movie from "../Movie/Movie";

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
          <Movie key={movie.id} movie={movie} isPoster={isPoster} />
        ))}
      </div>
    </div>
  );
};

export default Row;
