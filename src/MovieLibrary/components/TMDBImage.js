import React from "react";

const TMDB_IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const TMDBImage = ({ src, alt, ...restProps }) => (
  <img src={`${TMDB_IMAGE_BASE_PATH}${src}`} alt={alt} {...restProps} />
);

export default TMDBImage;
