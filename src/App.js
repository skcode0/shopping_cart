import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import NoMatchPage from './components/NoMatchPage';
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
import GameDetails from './components/GameDetails';
import AfterPurchase from './components/AfterPurchase';
import { PlatformProvider } from './components/contexts/PlatformContext';

const App = () => {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <PlatformProvider>
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/shop/:name" component={GameDetails}/>
              <Route exact path="/afterpurchase" component={AfterPurchase} />
              <Route component={NoMatchPage} />
            </Switch>
            <ShoppingCart />
          </BrowserRouter>
        </PlatformProvider>
      </ShoppingCartProvider>
    </div>
  );
};

export default App;