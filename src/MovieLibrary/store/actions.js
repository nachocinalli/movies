import {
  FETCH_MOVIES,
  IS_LOADING,
  PAGES_LOADED,
  SORT_MOVIES,
} from "../../actionTypes";
import { apiGetMoviesPages } from "../services/api";
const getMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});
const getPagesLoaded = (pages) => ({
  type: PAGES_LOADED,
  payload: pages,
});
const getIsLoading = (loading) => ({
  type: IS_LOADING,
  payload: loading,
});
export function fetchTopRatedMovies() {
  return (dispatch) => {
    dispatch(getIsLoading(true));
    const pages = ["1", "2", "3"];
    apiGetMoviesPages(pages)
      .then((data) => {
        const dataResults = data.map((r) => r.results);
        const allResults = [].concat.apply([], dataResults);
        dispatch(getMovies(allResults));
        dispatch(getIsLoading(false));
        dispatch(getPagesLoaded(pages.length));
      })
      .catch((res) => {
        console.log(res);
      });
  };
}
const sortMovies = (movies) => ({
  type: SORT_MOVIES,
  payload: movies,
});

export function doSortMovies(movies, options) {
  const moviesSorted = movies.slice();
  if (options === "name_asc") {
    moviesSorted.sort((x, y) => x.title.localeCompare(y.title));
  }
  if (options === "name_desc") {
    moviesSorted.sort((y, x) => x.title.localeCompare(y.title));
  }
  if (options === "rating") {
    moviesSorted.sort((y, x) => x.vote_count - y.vote_count);
  }
  return (dispatch) => {
    dispatch(sortMovies(moviesSorted));
  };
}
