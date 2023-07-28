export const API_KEY = process.env.REACT_APP_API_KEY;
export const baseURL = "https://api.themoviedb.org/3";

export const urlDetail = `${baseURL}/search/multi?api_key=${API_KEY}&language=fr-FR&query=`;

const request = [
  { title: "Originaux Netfilx", genreUrl: `${baseURL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_networks=213`, isPoster: true},
  { title: "Tendances actuelles", genreUrl: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`, isPoster: false },
  { title: "Les mieux notés", genreUrl: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`, isPoster: false },
  { title: "Action", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=28`, isPoster: false },
  { title: "Adventure", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=12`, isPoster: false },
  { title: "Animation", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=16`, isPoster: true },
  { title: "Comédie", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`, isPoster: false },
  { title: "Crime", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=80`, isPoster: false },
  { title: "Drama", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=18`, isPoster: false },
  { title: "Documentary", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=99`, isPoster: false },
  { title: "Familial", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10751`, isPoster: true },
  { title: "Fantaisi", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=14`, isPoster: false },
  { title: "Histoire", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=36`, isPoster: false },
  { title: "Horreur", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`, isPoster: false },
  { title: "Musique", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10402`, isPoster: false },
  { title: "Mystères", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=9648`, isPoster: true },
  { title: "Romance", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`, isPoster: false },
  { title: "Science Fiction", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=878`, isPoster: false },
  { title: "Thriller", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`, isPoster: false },
  { title: "Guerre", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10752`, isPoster: false },
  { title: "Western", genreUrl: `${baseURL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=37`, isPoster: true },
];

export default request;
