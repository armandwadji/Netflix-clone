/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utils/Utils";
import Movie from "../Movie/Movie";

const Row = ( { title, fetchUrl, isPoster } ) => {
  const rowRef = useRef( null );
  const [ movies, setMovies ] = useState( [] );
  
  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 1.0,
  };

  const callbackfunction = async (entries) => {
    const [ entry ] = entries;
    if (entry.isIntersecting) fetchData( fetchUrl ).then( ( { data: { results } } ) => { setMovies( results ) } );
  };

  //Appel de la data pour les rows de l'application
  useEffect( () => {
    const observer = new IntersectionObserver( callbackfunction, options );
    if ( rowRef.current ) observer.observe( rowRef.current );
    return _ => { if ( rowRef.current ) observer.unobserve( rowRef.current )  }
  }, []);

  return (
    <div className='row' ref={rowRef}>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {movies?.map( movie => <Movie key={movie.id} movie={movie} isPoster={isPoster} /> )}
      </div>
    </div>
  );
};

export default Row;
