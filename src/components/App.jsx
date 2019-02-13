import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import ProductList from './ProductList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/schedule' component={Schedule} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;