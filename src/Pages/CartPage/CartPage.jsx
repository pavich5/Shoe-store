import React, { useContext, useState, useEffect } from 'react';
import './CartPage.css';
import { ShoeContext } from '../../Contex/ShoesContex';
import { motion } from "framer-motion"

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(ShoeContext);

  // Initialize product quantities from the current cart items
  const [productQuantities, setProductQuantities] = useState({});

  // Set the initial state for productQuantities once cartItems are fetched
  useEffect(() => {
    const quantities = cartItems.reduce((quantities, product) => {
      quantities[product.id] = 1;
      return quantities;
    }, {});
    setProductQuantities(quantities);
  }, [cartItems]);

  // Save product quantities to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));
  }, [productQuantities]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.price * productQuantities[product.id], 0).toFixed(2);
  };

  const handleQuantityChange = (productId, quantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, prevQuantities[productId] + quantity),
    }));
  };

  return (
    <motion.div className="CartPage"
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,}}
    transition={{ duration: 1}}>
      <div className="cartTable">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <h2>There are no items in the cart.</h2>
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                    <img src={product.image} alt={product.title} />
                    <div className="txt">
                      <p>{product.title}</p>
                      <p style={{ color: '#7f8c8d', fontSize: '16px' }}>Size: {product.selectedSize}</p>
                    </div>
                  </td>
                  <td>
                    <div className="quantityInput">
                      <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                      <input type="number" value={productQuantities[product.id]} onChange={(e) => handleQuantityChange(product.id, e.target.valueAsNumber)} />
                      <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                    </div>
                    <button className="removeButton" onClick={() => removeFromCart(product.id)}>
                      Remove
                    </button>
                  </td>
                  <td>${(product.price * productQuantities[product.id]).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="cartSidebar">
        <div className="cartSummary">
          <h3>Cart Summary</h3>
          <p>Total Price: ${getTotalPrice()}</p>
          <button className="checkoutButton">Checkout</button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;
