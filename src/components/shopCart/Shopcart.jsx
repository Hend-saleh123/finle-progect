import "./shopcart.css";
import React, { useContext } from "react";
import { CartContext } from "../contaxt/CartContext";
import { FaTrash } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import section41 from '../images/section41.png'

const Shopcart = ({ onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div
          className="cart-items"
          style={{ maxHeight: "400px", overflowY: "scroll" }}
        >
          <h2 className="mb-3">Shopping Cart</h2>
          <hr />
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
              

                <img
                  className="product-image img-fluid mt-3"
                  src={`${item.images}?timestamp=${new Date().getTime()}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = section41;
                    e.target.style.width = "50px";
                    e.target.style.height = "50px";
                    e.target.style.borderRadius = "5px";

                  }}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
                <div className="cart-item-details ">
                  <span style={{ fontWeight: "bold" }}>
                    {item.title.split(" ").splice(0, 2).join(" ")}
                  </span>
                  <br></br>
                  <span> price: {item.price} EGP</span>
                </div>
                <FaTrash
                  onClick={() => removeFromCart(item.id)}
                  className="remove-icon"
                />
              </div>
            ))
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "100px",
            }}
          >
            <span className="fw-bold">Subtotal</span>
            <span
              style={{
                marginRight: "30px",
                color: "#B88E2F",
                fontWeight: "bold",
              }}
            >
              <p>
                Rs {cartItems.reduce((total, item) => total + item.price, 0)}.00
              </p>{" "}
            </span>
          </div>
          <hr></hr>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              fontSize: "12px",
            }}
          >
            <Link
              style={{
                background: "white",
                border: "none",
                width: "70px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                padding: "4px 15px",
              }}
              to={"/cart/:id"}
            >
              Cart
            </Link>

            <Link
              style={{
                background: "white",
                border: "none",
                width: "100px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                padding: "4px 15px",
              }}
              to={"/checkout"}
            >
              Checkout
            </Link>

            <Link
              style={{
                background: "white",
                border: "none",
                width: "100px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                padding: "4px 15px",
              }}
              to={""}
            >
              Comparison
            </Link>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "#B88E2F",
              border: "none",
              width: "100px",
              height: "34px",
              color: "#fff",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopcart;
