import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../config/Request";

const UseTvYoutubeId = (id) => {
  const [movieId, setMovieId] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/tv/${id}/videos?api_key=${API_KEY}&language=fr-FR`)
      .then((response) => {
        if (response.data.results.length > 0 && !movieId) {
          const {
            data: { results },
          } = response;

          setMovieId(results[0].key);
          movieId && console.log("id : ", movieId);
        } else {
          return movieId;
        }
      })
      .catch((err) => console.log(`Error Tv : ${err}`));
  }, [id, movieId]);

  return movieId;
};

export default UseTvYoutubeId;
