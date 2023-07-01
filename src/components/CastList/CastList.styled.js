import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  width: calc((100% - 30px) / 4);
  display: flex;
  align-items: center;

  gap: 5px;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 100px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;