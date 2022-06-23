import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../config/Request";

const UseMovieYoutubeId = (id) => {
  const [movieId, setMovieId] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}&language=fr-FR`)
      .then((response) => {
        console.log("results length : ", response.data.results[0].key);

        if (response.data.results.length > 0 && !movieId) {
          const {
            data: { results },
          } = response;

          setMovieId(results[0].key);
          movieId && console.log("id : ", movieId);
        }
      })
      .catch((err) => {
        console.log(`Error Movie : ${err}`);
      });
  }, [id, movieId]);

  return movieId;
};

export default UseMovieYoutubeId;
