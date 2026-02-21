import { API_KINOPOISK_HEADERS, API_KINOPOISK_BASE_URL } from "../constants";

export const getMovie = async (id) => {
  const data = await fetch(`${API_KINOPOISK_BASE_URL}/api/v2.2/films/${id}`, {
    method: "GET",
    headers: API_KINOPOISK_HEADERS,
  });

  return data.json();
};

export const getMovieList = async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
  const data = await fetch(
    `${API_KINOPOISK_BASE_URL}/api/v2.2/films?${queryParams}`,
    { method: "GET", headers: API_KINOPOISK_HEADERS },
  );

  return data.json().items;
};

export const searchMovies = async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();

  const data = await fetch(
    `${API_KINOPOISK_BASE_URL}/api/v2.1/films/search-by-keyword?${queryParams}`,
    { method: "GET", headers: API_KINOPOISK_HEADERS },
  );

  return data.json();
};
