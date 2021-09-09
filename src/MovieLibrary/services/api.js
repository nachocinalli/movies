const API_URL = "https://api.themoviedb.org";
const API_KEY = "54ffed57deb5a7a8688be4de3007e578";

export const apiGetMoviesPages = (pages) => {
  const urls = pages.map(
    (page) => `${API_URL}/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
  );

  const allRequests = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  return Promise.all(allRequests);
};
