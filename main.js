import { getFilmsList } from "./getFilmFetch";
import { renderFilmsFromAPI } from "./render";
import { favFilms } from "./favorite";
import { searchFilm } from "./search";
import { sortByRating, sortByDate, sortBoxOffice } from "./sorting";

getFilmsList().then(() => {
  let films = JSON.parse(localStorage.getItem("allFilms"));
  renderFilmsFromAPI(films);
  favFilms();
  sortByRating();
  sortByDate();
  sortBoxOffice();
  searchFilm();
});
