import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  width: 100px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Img = styled.img`
  max-width: 300px;
`;

export const LinkBtn = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
  border: none;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
