import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Parse "$18" style strings into a number
  const parseCost = (cost) => parseFloat(String(cost).replace('$', ''));

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon! Checkout functionality is not yet available.');
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) onContinueShopping(e);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit price: {item.cost}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-subtotal">
                  Subtotal: ${calculateTotalCost(item)}
                </p>
              </div>
              <button
                className="delete-button"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h2 className="cart-total">Total: ${calculateTotalAmount()}</h2>
        <div className="cart-actions">
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckoutShopping}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
