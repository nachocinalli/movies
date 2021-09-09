import { FETCH_MOVIES, IS_LOADING, PAGES_LOADED } from "../../actionTypes";
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
