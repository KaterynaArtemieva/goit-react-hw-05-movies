import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import {
//   MovieCard,
//   ImageWrapper,
//   Text,
//   Btn,
//   StyledLink,
//   LinkList,
//   LinkItem,
// } from './Movie.styled';
// import { MainContainer } from 'utils/GlobalStyle';
import { Link } from 'react-router-dom';

export const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_average, genres } =
    movie;
  const location = useLocation();
  const navigation = useNavigate();
  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={onBtnClick}>
        Go back
      </button>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <Text>User score: {Math.round(vote_average * 10)} %</Text>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <h3>Overview</h3>
          <Text>{overview}</Text>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};