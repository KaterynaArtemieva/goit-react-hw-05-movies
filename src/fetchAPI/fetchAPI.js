import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'd3bfd9e3078e7fbc5691e64e118089ee';

export const fetchTrendingMovies = async () => {
  const { data } = await axios('trending/movie/week', {
    params: { api_key: KEY },
  });
  return data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    url: poster_path,
  }));
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios('search/movie', {
    params: { api_key: KEY, query },
  });
  return data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    url: poster_path,
  }));
};

export const fetchMovieById = async (movieId, endpoint) => {
  const response = await axios(`movie/${movieId}${endpoint}`, {
    params: { api_key: KEY },
  });

  return response.data;
};
