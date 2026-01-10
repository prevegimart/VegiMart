import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const cart = state?.cart || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="emoji">{item.img}</span>
              <div className="info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price} × {item.qty}
                </p>
              </div>
              <strong>₹{item.price * item.qty}</strong>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ₹{total}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default CartPage;
