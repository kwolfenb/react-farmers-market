import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import ProductList from './ProductList';

function App(){
  return (
    <div>
      <Header />
      <ProductList />
      <Schedule />
    </div>
  );
}

export default App;