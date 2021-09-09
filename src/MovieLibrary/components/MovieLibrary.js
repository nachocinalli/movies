import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchTopRatedMovies,
  doSortMovies,
  getMoreMovies,
} from "../store/actions";

import logo from "./logo.svg";
import "./MovieLibrary.css";
import { getMovies, getIsLoading, getPagesLoaded } from "../store/selectors";
import MoviesList from "./MoviesList";
import { SortingOptions } from "./SortingOptions";

class MovieLibrary extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };
  state = {
    prevY: 0,
  };
  componentDidMount() {
    const { fetchTopRatedMovies } = this.props;
    fetchTopRatedMovies();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );

    this.observer.observe(this.loadingRef);
  }
  debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    const { pagesLoaded, getMoreMovies } = this.props;
    if (this.state.prevY > y) {
      this.debounce(getMoreMovies(pagesLoaded), 400);
    }
    this.setState({ prevY: y });
  }
  handleSortingChange = (sortingType) => {
    const { doSortMovies, movies } = this.props;
    doSortMovies(movies, sortingType);
  };
  render() {
    const { movies, isLoading } = this.props;
    const loadingStyle = { display: isLoading ? "block" : "none" };
    return (
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
          <SortingOptions onChange={this.handleSortingChange} />
        </header>
        <div className="ML-intro">
          {movies.length && <MoviesList movies={movies} />}
        </div>
        <div
          className="ML-loader"
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
        >
          <span style={loadingStyle}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    movies: getMovies(state),
    pagesLoaded: getPagesLoaded(state),
    isLoading: getIsLoading(state),
  }),
  { fetchTopRatedMovies, getMoreMovies, doSortMovies }
)(MovieLibrary);
