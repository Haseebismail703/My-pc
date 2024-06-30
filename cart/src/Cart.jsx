// import React, { useEffect, useState } from 'react';

// function Cart(prop) {
//   const [products, setProducts] = useState([]);
// //   console.log(products) 
//   useEffect(() => {
//     setProducts(prop.products);
//   }, [prop])

//   const incrementQuantity = (id) => {
//     const updatedProducts = products.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   const decrementQuantity = (id) => {
//     const updatedProducts = products.map(item =>
//       item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     setProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   const removeFromCart = (id) => {
//     const updatedProducts = products.filter(item => item.id !== id);
//     setProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   const calculateTotalPrice = () => {
//     return products.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

// //   console.log(prop.products)
//   return (
//     <div>
//       <h1>Cart</h1>
//       {products.map((item, index) => (
//         <div key={index}>
//           <p>{item.id}</p>
//           <p>{item.name}</p>
//           <p>${item.price}</p>
//           <button onClick={() => incrementQuantity(item.id)}>+</button>
//           <span>{item.quantity}</span>
//           <button onClick={() => decrementQuantity(item.id)}>-</button>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button> <br /><br />
//         </div>
//       ))}
//       <h5>Total price: ${calculateTotalPrice()}</h5>
//     </div>
//   );
// }

// export default Cart;
