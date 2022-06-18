import axios from "axios";

//Méthode pour afficher la description sur 150 lettres
export const truncateText = (string, n) => {
  return string?.length > n
    ? string.substr(0, n) + "..."
    : "pas de description";
};

//Méthode qui fait les appels api selon le paramètre passé en argument de la fonction
export const fetchData = async (request) => {
  return axios.get(request);
};
