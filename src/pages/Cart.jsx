// src/pages/Cart.jsx

import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, total }) => {
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
