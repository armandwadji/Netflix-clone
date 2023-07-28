/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { formatDate, genreFinder } from "../../utils/Utils";
import Video from "../videoComponent/Video";

const Movie = ( { movie, isPoster } ) => {
  const movieRef = useRef( null );
  const [ popup, setPopup ] = useState( false );
  const [ showCart, setShowCart ] = useState( false );

  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 1.0,
  };

  const callbackfunction = async (entries) => {
    const [ entry ] = entries;
    if (entry.isIntersecting) setShowCart(true);
  };
  
  useEffect( () => { 
    const observer = new IntersectionObserver( callbackfunction, options );
    if ( movieRef.current ) observer.observe( movieRef.current );
    return _ => { if ( movieRef.current ) observer.unobserve( movieRef.current )  }
  }, [movieRef, options] );

  return (
    <>
        <div className='movie' onMouseLeave={ _ => setPopup( false ) }>
          <div className='description' onClick={ _ => setPopup(!popup) }>
            { movie.backdrop_path && movie.poster_path && (
              
            <figure className={ Math.random() > 0.5 ? "row__images--image" : "" } style={ { visibility: popup ? 'hidden' : 'visible' } }>
              <img
                src={ !showCart ? './images/skeleton.webp' : `https://image.tmdb.org/t/p/original/${isPoster ? movie?.poster_path : movie?.backdrop_path}` }
                alt={ movie?.title || movie?.original_title || movie?.name || movie?.original_name }
                style={{opacity: !showCart ? 0.3 : 1}}
                ref={ movieRef } 
              />
              </figure>
            )}

            <div className='row__images--description'>
              <h3>{movie?.title || movie?.original_title || movie?.name}</h3>
              <h5>Sortie : {formatDate(movie?.first_air_date || movie.release_date)}</h5>
              <ul>
                {genreFinder(movie?.genre_ids)?.map( genre =>  <li key={genre}>{genre}</li>  )}
              </ul>
              <p>{movie?.overview}</p>
            </div>
          </div>
          <Video movie={movie} popup={popup} />
        </div>
    </>
  );
};

export default Movie;
