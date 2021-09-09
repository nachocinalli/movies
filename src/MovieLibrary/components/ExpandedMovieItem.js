import React, { Component } from "react";
import TMDBImage from "./TMDBImage";

export class ExpandedMovieItem extends Component {
  handleClick = () => {
    const { onClose } = this.props;
    onClose();
  };
  render() {
    const {
      movie: {
        poster_path,
        title,
        vote_average,
        vote_count,
        release_date,
        overview,
      },
    } = this.props;

    return (
      <div>
        <div className="expanded-movie-item-shadow"></div>
        <div className="expanded-movie-item">
          <button
            className="expanded-movie-item-close"
            type="button"
            aria-label="Close"
            onClick={this.handleClick.bind(this)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                fill="#fff"
              ></path>
            </svg>
          </button>

          <div className="expanded-movie-item-wrap">
            <div className="expanded-movie-item-poster">
              <TMDBImage src={poster_path} alt={title} />
            </div>
            <div className="expanded-movie-item-description">
              <div className="expanded-movie-item-title">{title}</div>
              <div className="expanded-movie-item-release">
                {new Date(release_date).getFullYear()}
              </div>

              <div className="expanded-movie-item-overview">{overview}</div>

              <div className="expanded-movie-item-features">
                <div className="expanded-movie-item-average">
                  {vote_average}
                </div>
                <div className="expanded-movie-item-votes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.422"
                    height="10.162"
                    viewBox="0 0 11.422 10.162"
                  >
                    <path
                      id="heart_"
                      data-name="heart "
                      d="M10.517.995A3.072,3.072,0,0,0,8.232,0,2.874,2.874,0,0,0,6.437.62a3.672,3.672,0,0,0-.726.758A3.67,3.67,0,0,0,4.986.62,2.873,2.873,0,0,0,3.191,0,3.072,3.072,0,0,0,.907.995,3.57,3.57,0,0,0,0,3.433,4.252,4.252,0,0,0,1.133,6.216,24.158,24.158,0,0,0,3.969,8.878c.393.335.838.715,1.3,1.119a.671.671,0,0,0,.883,0c.462-.4.908-.784,1.3-1.119A24.144,24.144,0,0,0,10.29,6.216a4.251,4.251,0,0,0,1.133-2.783A3.57,3.57,0,0,0,10.517.995Zm0,0"
                      transform="translate(0)"
                      fill="#7b7b8b"
                    />
                  </svg>
                  {vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
