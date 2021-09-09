import React, { Component } from "react";
import classNames from "classnames";
import TMDBImage from "./TMDBImage";
export class MovieListItem extends Component {
  handleClick = () => {
    const { onSelect, movie } = this.props;
    onSelect(movie);
  };
  render() {
    const {
      movie: { poster_path, title },
      isSelected,
    } = this.props;

    return (
      <div
        className={classNames("movie-list-item", { selected: isSelected })}
        onClick={this.handleClick.bind(this)}
      >
        <TMDBImage src={poster_path} alt={title} className="poster" />
      </div>
    );
  }
}
