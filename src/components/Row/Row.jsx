/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../utils/Utils";
import Movie from "../Movie/Movie";

const Row = ( { title, fetchUrl, isPoster } ) => {
  const rowRef = useRef( null );
  const scrollRef = useRef( null );
  const [ movies, setMovies ] = useState( [] );
  let pagination = 1;
  
  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 0.5,
  };

  const callbackfunction = async (entries) => {
    const [ entry ] = entries;
    
    if ( entry.isIntersecting && entry.target.className === 'row' ) {
      await fetchData( `${fetchUrl}&page=1` ).then( ( { data: { results } } ) => setMovies( results ) );
    }
    else if ( entry.isIntersecting && entry.target.className === 'paginate' ) {
      pagination++;
      await fetchData( `${fetchUrl}&page=${pagination}` ).then( ( { data: { results } } ) =>  setMovies( prev => [ ...prev, ...results ] ) );
    }

  };


  //Appel de la data pour les rows de l'application
  useEffect( () => {
    const observer = new IntersectionObserver( callbackfunction, options );
    
    if ( rowRef.current ) observer.observe( rowRef.current );
    if ( scrollRef.current ) observer.observe( scrollRef.current );

    return _ => { if ( rowRef.current ) observer.unobserve( rowRef.current )  }
  }, [] );

  return (
    <div className='row' ref={rowRef}>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        { movies?.map( ( movie ) => <Movie key={ movie.id } movie={ movie } isPoster={ isPoster } /> ) }
        <div className="paginate" ref={scrollRef}>Loading...</div>
      </div>
    </div>
  );
};

export default Row;
