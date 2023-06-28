import { Loader } from 'components/Loader/Loader';
// import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';
import { CastList } from 'components/CastList/CastList';
const CastPage = () => {
  const endPoint = '/credits';
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await fetchMovieById(movieId, endPoint);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(id);
  }, [id, endPoint]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>No results</p>}
      {movieInfo && <CastList info={movieInfo} />}
    </>
  );
};

export default CastPage;
