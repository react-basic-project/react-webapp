import React from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom";
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
  const { path, url } = useRouteMatch();
  console.log(path);
  return (
    <div>
      <ul>
        <Link to={`${url}/1`}><li>list 1</li></Link>
        <Link to={`${url}/2`}><li>list 2</li></Link>
      </ul>
      <Button to="/">back to the Home</Button>

      <Switch>
        <Route exact path={path}>
          <h3>please select List item</h3>
        </Route>
        <Route path={`${path}/:listId`}>
          <ListDetail />
        </Route>
      </Switch>
    </div>
  )
}

export const ListDetail = () => {
  const { listId } = useParams();
  return (
    <div>
    this list id is {listId}!
    </div>
  );
}

export default {
  Home,
  List,
};