import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, List } from './components/App';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/list" component={List}/>
    </Router>
    );
}

export default App;