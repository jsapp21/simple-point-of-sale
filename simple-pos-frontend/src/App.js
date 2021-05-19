import React, { useEffect } from 'react';
import ProductForm from './components/ProductForm';
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

  return (
    <div>
      <ProductForm />
    </div>
  );
}

export default App;
