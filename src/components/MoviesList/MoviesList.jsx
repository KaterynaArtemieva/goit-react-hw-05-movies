import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, ItemLink, Title, Img } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const noImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiEg5RfmS0fd3YtmigKUmpnOJLADj5b_Hd1-Ek6WV0YT9zQV-slUKmbdT1WvDklge3RU&usqp=CAU';
  return (
    <List>
      {movies.map(({ id, title, url }) => (
        <Item key={id}>
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                url ? `https://image.tmdb.org/t/p/w500/${url}` : `${noImage}`
              }
              alt={title}
              width="300"
            />
            <Title>{title}</Title>
          </ItemLink>
        </Item>
      ))}
    </List>
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
