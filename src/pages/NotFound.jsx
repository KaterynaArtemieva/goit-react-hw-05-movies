import React from 'react';
// import { GoBack } from './Page.styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link to="/">Go Back!</Link>
      <h2>Page not found</h2>
    </>
  );
};

export default NotFound;