// import PropTypes from 'prop-types';
// import { MainContainer } from 'utils/GlobalStyle';
// import { ActorList, CastItem, Wrapper, Avatar } from './CastList.styled';

export const CastList = ({ info }) => {
  const noPhoto =
    'https://planeta-agro.com.ua/cloud-cgi/static/uaprom-static/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png';
  return (
    <div>
      {info.cast.length > 0 ? (
        <ul>
          {info.cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : `${noPhoto}`
                  }
                  alt={name}
                />
              </div>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We have no more details</p>
      )}
    </div>
  );
};

// CastList.propTypes = {
//   info: PropTypes.shape({
//     cast: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         profile_path: PropTypes.string,
//         character: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };