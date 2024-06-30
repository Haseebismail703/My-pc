import React, { useState, useEffect } from 'react';
// import Cart from './Cart';
import Navi from './comp/Navi';

const Products = [
  { id: 1, name: 'Product 1', price: 10, quantity: 1 },
  { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  { id: 3, name: 'Product 3', price: 30, quantity: 1 },
];

const App = () => {
  const [message, setMessage] = useState('');
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    // Load products from local storage on mount
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProductsInCart(storedProducts);
  }, []);

  const add = (item) => {
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const existingItem = existingProducts.find(prod => prod.id === item.id);

    if (existingItem) {
      setMessage(`${item.name} is already in the cart!`);
    } else {
      const updatedProducts = [...existingProducts, { ...item }];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setProductsInCart(updatedProducts); // Update state to trigger re-render of Cart component
      setMessage(`Added ${item.name} to the cart!`);
    }
  };

  return (
    <div>
      <Navi products={productsInCart} />
      <center>
        <h1>Shopping Cart</h1>
        {Products.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <button onClick={() => add(item)}>Add</button>
          </div>
        ))}
        <p>{message}</p><br />
      </center>


      {/* <Cart products={productsInCart} /> */}

    </div>
  );
};

export default App;
