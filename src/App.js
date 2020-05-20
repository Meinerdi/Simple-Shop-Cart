import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import s from '../src/style.module.css'

import ProductsContainer from './components/Products/ProductsContainer';
import CartContainer from './components/Cart/CartContainer';


let App = () => {
  return (
    <div className={s.wrapper}>
      <Menu />
      <Switch>
        <Route path={'/cart'} component={CartContainer} />
        <Route path={'/products'} component={ProductsContainer} />
      </Switch>
    </div>
  );
}

export default App;
