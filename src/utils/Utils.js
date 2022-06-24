import axios from "axios";

//Méthode pour afficher la description sur 150 lettres
export const truncateText = (string, n) => {
  return string?.length > n
    ? string.substr(0, n) + "..."
    : "pas de description";
};

//Méthode qui fait les appels api selon le paramètre passé en argument de la fonction
export const fetchData = async (request) => {
  return await axios.get(request);
};

//Méthode pour afficher les genres:
export const genreFinder = (genre) => {
  let genreArray = [];

  for (let i of genre) {
    switch (i) {
      case 28:
        genreArray.push(`Action`);
        break;
      case 12:
        genreArray.push(`Aventure`);
        break;
      case 16:
        genreArray.push(`Animation`);
        break;
      case 35:
        genreArray.push(`Comédie`);
        break;
      case 80:
        genreArray.push(`Policier`);
        break;
      case 99:
        genreArray.push(`Documentaire`);
        break;
      case 18:
        genreArray.push(`Drame`);
        break;
      case 10751:
        genreArray.push(`Famille`);
        break;
      case 14:
        genreArray.push(`Fantasy`);
        break;
      case 36:
        genreArray.push(`Histoire`);
        break;
      case 27:
        genreArray.push(`Horreur`);
        break;
      case 10402:
        genreArray.push(`Musique`);
        break;
      case 9648:
        genreArray.push(`Mystère`);
        break;
      case 10749:
        genreArray.push(`Romance`);
        break;
      case 878:
        genreArray.push(`Science-fiction`);
        break;
      case 10770:
        genreArray.push(`Téléfilm`);
        break;
      case 53:
        genreArray.push(`Thriller`);
        break;
      case 10752:
        genreArray.push(`Guerre`);
        break;
      case 37:
        genreArray.push(`Western`);
        break;
      default:
        break;
    }
  }

  return genreArray;
};

export const formatDate = (date) => {
  if (date) {
    return date.split("-").reverse().join("/");
  }
  return;
};
