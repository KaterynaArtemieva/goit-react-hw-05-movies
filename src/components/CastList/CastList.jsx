import PropTypes from 'prop-types';
import { Box } from '../Box/Box.styled';
import { List, Item, Wrapper, Avatar } from './CastList.styled';

export const CastList = ({ info }) => {
  const noPhoto =
    'https://planeta-agro.com.ua/cloud-cgi/static/uaprom-static/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png';
  return (
    <Box>
      {info.cast.length > 0 ? (
        <List>
          {info.cast.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              <Wrapper>
                <Avatar
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : `${noPhoto}`
                  }
                  alt={name}
                />
              </Wrapper>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </Item>
          ))}
        </List>
      ) : (
        <p>We have no more details</p>
      )}
    </Box>
  );
};

CastList.propTypes = {
  info: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
