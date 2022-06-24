import React, { useState } from "react";
import YouTube from "react-youtube";
// import { API_KEY, baseURL, urlDetail } from "../../config/Request";
// import UseKeyYoutubeTrailer from "../../Hooks/UseKeyYoutubeTrailer";
// import { fetchData } from "../../utils/Utils";

const Video = ({ movie, popup }) => {
  const [movieTrailerKey, setMovieTrailerKey] = useState("");

  // const key = UseKeyYoutubeTrailer(movie);
  // console.log(key);

  //Appel de la data pour la lecture de la vidéo
  // useEffect(() => {
  //   if (popup) {
  //     fetchData(
  //       `${urlDetail}${
  //         movie.title ||
  //         movie.original_title ||
  //         movie.name ||
  //         movie.original_name
  //       }`
  //     )
  //       .then((res) => {
  //         const movieDetail = res.data.results.filter(
  //           (res) => res.id === movie.id
  //         );
  //         // console.log(res.data.results);
  //         return movieDetail;
  //       })
  //       .then((res) => {
  //         const { id, media_type } = res[0];
  //         // console.log(id, media_type);

  //         return fetchData(
  //           `${baseURL}/${media_type}/${id}/videos?api_key=${API_KEY}&language=fr-FR`
  //         ).then((response) => {
  //           const {
  //             data: { results },
  //           } = response;
  //           // console.log("results : ", results);
  //           if (results.length > 0) {
  //             setMovieTrailerKey(results[0].key);
  //             // console.log("movieTrailerKey : ", movieTrailerKey);
  //           }
  //         });
  //         // .catch((err) => console.log(`Error movieKey: ${err}`));
  //       })
  //       .catch((err) => console.log(`Error movieDetail: ${err}`));
  //   }
  // }, [
  //   movie.id,
  //   movie.name,
  //   movie.original_name,
  //   movie.original_title,
  //   movie.title,
  //   movieTrailerKey,
  //   popup,
  // ]);

  return (
    <>
      {popup && (
        <div className={`video ${popup && "visible"}`}>
          {movieTrailerKey ? (
            <YouTube
              videoId={movieTrailerKey}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
              // className='iframe'
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Video;
