import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'fetchAPI/fetchAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <p>Oops! We have some tech problems, please, try later!</p>}
    </div>
  );
};

export default Home;
