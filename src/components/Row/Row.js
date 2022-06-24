import React from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import Movie from "../Movie/Movie";

const Row = ({ title, fetchUrl, isPoster }) => {
  const movies = UseFetchData(fetchUrl);

  return (
    <>
      {movies && (
        <div className='row'>
          <h2 className='row__title'>{title}</h2>
          <div className='row__images'>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} isPoster={isPoster} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Row;
