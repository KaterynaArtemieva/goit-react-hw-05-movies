import { Loader } from 'components/Loader/Loader';
import { ReviewList } from 'components/ReviewList/ReviewList';
// import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';

const ReviewsPage = () => {
  const endPoint = '/reviews';
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
      {movieInfo && <ReviewList info={movieInfo} />}
    </>
  );
};

export default ReviewsPage;
