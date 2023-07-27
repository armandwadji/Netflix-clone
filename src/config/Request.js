export const API_KEY = process.env.REACT_APP_API_KEY;
export const baseURL = "https://api.themoviedb.org/3";

export const urlDetail = `${baseURL}/search/multi?api_key=${API_KEY}&language=fr-FR&query=`;

const request = [
  { title: "Originaux Netfilx", genreUrl: `${baseURL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_networks=213`, isPoster: true},
  { title: "Tendances actuelles", genreUrl: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`, isPoster: false },
  { title: "Les mieux notés", genreUrl: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`, isPoster: false },
  { title: "Action", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genre=28`, isPoster: false },
  { title: "Horreur", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`, isPoster: false },
  { title: "Comédie", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`, isPoster: false },
  { title: "Romance", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`, isPoster: false },
  { title: "Familial", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10751`, isPoster: false },
  { title: "Thriller", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`, isPoster: false }
];

export default request;
