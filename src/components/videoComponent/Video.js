/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { fetchData } from "../../utils/Utils";
import { API_KEY, baseURL, urlDetail } from "../../config/Request";

const Video = ({ movie, popup }) => {
  const [ movieTrailerKey, setMovieTrailerKey ] = useState( null );
  
  const getMovieTrailerKey = async () => {
    const moviesDetail = await fetchData( `${urlDetail}${movie?.title || movie?.original_title || movie?.name || movie?.original_name}` );
    const movieDetail = await moviesDetail.data.results.filter( ( res ) => res.id === movie.id );
    const { id, media_type } = await movieDetail[ 0 ];
    const { data: { results } } = await fetchData( `${baseURL}/${media_type}/${id}/videos?api_key=${API_KEY}&language=fr-FR` );

    return results[ 0 ]?.key ;
  }

  //Appel de la data pour la lecture de la vidéo
  useEffect( () => {
    if ( popup ) getMovieTrailerKey().then( key => setMovieTrailerKey(key));
  }, [getMovieTrailerKey, popup] );

  return (
    <>
      {popup && (
        <div className={`video ${popup && "visible"}`}>
          { movieTrailerKey && ( <YouTube videoId={ movieTrailerKey } opts={ { width: "100%", height: "100%", playerVars: { autoplay: 1 } } } /> )  }
        </div>
      )}
    </>
  );
};

export default Video;
