import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../src/style.css';
import CartContainer from './components/Cart/CartContainer';
import Header from './components/Header/Header';
import ProductsContainer from './components/Products/ProductsContainer';
import { Sidebar } from './components/Sidebar/Sidebar';



let App = () => {
  return (
    <>
      <div className="wrapperHeader">
        <Header />
      </div>
      <div className="wrapperContent">
        <Sidebar />
        <Switch>
          <Route path={'/'} component={ProductsContainer} exact />
          <Route path={'/cart'} component={CartContainer} />
          <Route path={'/products'} component={ProductsContainer} />
        </Switch>
      </div>
    </>
  );
}

export default App;
