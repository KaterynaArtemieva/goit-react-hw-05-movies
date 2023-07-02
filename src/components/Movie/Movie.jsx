import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '../Box/Box.styled';
import { Button, Wrap, Img, LinkBtn, List } from './Movie.styled';
import PropTypes from 'prop-types';

export const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_average, genres } =
    movie;
  const location = useLocation();
  const navigation = useNavigate();
  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <Box>
      <Button type="button" onClick={onBtnClick}>
        Go back
      </Button>
      <Wrap>
        <Img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User score: {Math.round(vote_average * 10)} %</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </Wrap>
      <h2>Additional information</h2>
      <List>
        <li>
          <LinkBtn to="cast" state={location.state}>
            Cast
          </LinkBtn>
        </li>
        <li>
          <LinkBtn to="reviews" state={location.state}>
            Reviews
          </LinkBtn>
        </li>
      </List>
    </Box>
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
