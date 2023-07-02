import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Item = styled.li`
  padding-bottom: 10px;
  width: calc((100% - 100px) / 4);
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: inline-block;
`;

export const Title = styled.h3`
  text-align: center;
  color: black;
  padding: 0 8px;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;
