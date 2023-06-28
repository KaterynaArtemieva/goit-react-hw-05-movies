import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const noImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiEg5RfmS0fd3YtmigKUmpnOJLADj5b_Hd1-Ek6WV0YT9zQV-slUKmbdT1WvDklge3RU&usqp=CAU';
  return (
    <ul>
      {movies.map(({ id, title, url }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                url ? `https://image.tmdb.org/t/p/w500/${url}` : `${noImage}`
              }
              alt={title}
              width="300"
            />
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};