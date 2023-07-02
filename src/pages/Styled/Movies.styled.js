import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

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
  &:hover {
    transform: scale(1.1);
  }
`;
