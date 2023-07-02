import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, NavList } from './Layout.styled';
import { Box } from '../Box/Box.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Box>
          <NavList>
            <li>
              <Link to="/" end>
                Home
              </Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
          </NavList>
        </Box>
      </Header>
      <Box>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
