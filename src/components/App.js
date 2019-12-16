import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HomeStyled = styled.div`
 width: 100%;
 background-color: #09d3ac;
 font-size: 36px;
 font-weight: bold;
 color: #FFFF;
 text-align: center;
`;

const Button = styled(Link)`
 width: 100%;
 display: inline-block;
 background-color: antiquewhite;
`;

export const Home = () => {
  return (
    <HomeStyled>
      React Home
      <Button to="/list">show List</Button>
    </HomeStyled>
  )
};

export const List = () => {
  return (
    <div>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
      </ul>
      <Button to="/">back to the Home</Button>
    </div>
  )
}

export default {
  Home,
  List,
};