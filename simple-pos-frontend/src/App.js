import React, { useEffect } from 'react';
import ProductForm from './components/ProductForm';
import { useDispatch } from 'react-redux';
import { loadProducts } from './actions/loadProduct';

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(loadProducts())
  });

  return (
    <div>
      <ProductForm />
    </div>
  );
}

export default App;
