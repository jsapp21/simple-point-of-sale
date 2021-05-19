import React, { useEffect } from 'react';
import ProductForm from './components/ProductForm';
import { useDispatch } from 'react-redux';
import { loadProducts } from './actions/product';

const App = () => {

    // const product = useSelector((state) => state.product);
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
