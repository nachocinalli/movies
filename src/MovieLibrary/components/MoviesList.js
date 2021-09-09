import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./MoviesList.css";
import { MovieListItem } from "./MovieListItem";
import { ExpandedMovieItem } from "./ExpandedMovieItem";

export default class MoviesList extends PureComponent {
  static propTypes = {
    movies: PropTypes.array.isRequired,
  };

  state = {
    selectedMovie: null,
  };

  handleSelectMovie = (item) => this.setState({ selectedMovie: item });
  handleCloseMovie = () => this.setState({ selectedMovie: null });
  render() {
    const { movies } = this.props;
    const { selectedMovie } = this.state;

    return (
      <div className="movies-list">
        <div className="items">
          {movies.map((movie) => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              isSelected={selectedMovie === movie}
              onSelect={this.handleSelectMovie}
            />
          ))}
        </div>
        {selectedMovie && (
          <ExpandedMovieItem
            movie={selectedMovie}
            onClose={this.handleCloseMovie}
          />
        )}
      </div>
    );
  }
}
