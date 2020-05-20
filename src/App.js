import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import '../src/style.css'

import ProductsContainer from './components/Products/ProductsContainer';
import CartContainer from './components/Cart/CartContainer';


let App = () => {
  return (
    <div className="wrapper">
      <Menu />
      <Switch>
        <Route path={'/cart'} component={CartContainer} />
        <Route path={'/products'} component={ProductsContainer} />
      </Switch>
    </div>
  );
}

export default App;
