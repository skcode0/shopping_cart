import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import NoMatchPage from './components/NoMatchPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;