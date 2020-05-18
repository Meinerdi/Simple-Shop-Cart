import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import s from '../src/style.module.css'

import ProductsContainer from './Components/Products/ProductsContainer';
import CartContainer from './Components/Cart/CartContainer';


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
