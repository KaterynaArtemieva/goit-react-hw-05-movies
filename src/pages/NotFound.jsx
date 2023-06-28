import React from 'react';
// import { GoBack } from './Page.styled';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <Link to="/">Go Back!</Link>
      <h2>Page not found</h2>
    </>
  );
};
