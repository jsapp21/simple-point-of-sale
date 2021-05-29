import React from 'react';
import { useSelector } from 'react-redux';
// import { filterProduct } from '../actions/category';

const Product = ({category, product, onChange}) => {

    const products = useSelector((state) => state.products);
    // const selectedCategory = useSelector((state) => state.selectedCategory);
    // const selectedProduct = useSelector((state) => state.selectedProduct);
    // const dispatch = useDispatch();

    const handleChange = (e) => {
        // debugger
        onChange({ product: {...product.product,  [e.target.name]: e.target.value }  })
        // dispatch(filterProduct(form.product.name));
    }
    

    let productNames = products.filter(p => p.category.name.toLowerCase().includes(category.category.name.toLowerCase()))
    console.log(productNames)
    console.log(category.category.name)
    // let descriptions = productNames.filter(p => p.name.toLowerCase().includes(product.product.name.toLowerCase()))

    // let foundDesc = descriptions.description
    // let x = descriptions.find(k => k.description)
    // console.log(x.description)


    return (
        <div>
            
            <label>Name
            <input name="name" type="text" list="product" onChange={handleChange} />
                <datalist id="product">
                    {productNames.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.name}></option>
                    )}
                    {/* {productNames.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.name}></option>
                    )} */}
                </datalist>
                </label>

            
            <label>Description
            <input name="description" type="text" list="description" onChange={handleChange} />
                <datalist id="description">
                    {productNames.map((product, index) =>
                        <option key={`${product}-${index}`} value={product.description}></option>
                    )}
                </datalist>
            </label>

            {/* <label>Description
                {productNames.map((product, index) => 
                    <textarea key={`${product}-${index}`} name="description" value={product.description} onChange={handleChange} />
                )}
            </label> */}
        </div>
    );
}

export default Product;