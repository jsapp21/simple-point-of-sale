import React, { useEffect } from 'react';
import ProductForm from './components/ProductForm';
import { useDispatch } from 'react-redux';
import { loadProducts } from './actions/product';

const App = () => {

  const dispatch = useDispatch();
  
  // const product = useSelector((state) => state.product);
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
