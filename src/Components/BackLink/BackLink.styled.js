import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
  padding: 8px;
  background-color: lightgray;
  border-radius: 4px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: blue;
  }
`;