import {
  FETCH_MORE_MOVIES,
  FETCH_MOVIES,
  IS_LOADING,
  PAGES_LOADED,
  SORT_MOVIES,
} from "../../actionTypes";

const initialState = {
  movies: [],
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case SORT_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case PAGES_LOADED:
      return {
        ...state,
        pagesLoaded: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case FETCH_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...payload],
      };
    default:
      return state;
  }
}
