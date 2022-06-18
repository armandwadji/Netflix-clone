const API_KEY = "0d35c2af84390857eb8ff45e611f310d";
const baseURL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  fetchNetflixOrignals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
  fetchTActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchTComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchTRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchTDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
