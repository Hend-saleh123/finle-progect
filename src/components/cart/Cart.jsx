import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import forca from "../images/forca.jpeg";
import logo from "../images/logo.png";
import Menu from "../menu/Menu";
import "./cart.css";
import { CartContext } from "../contaxt/CartContext";
import section41 from "../images/section41.png";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  async function productDetails() {
    setLoading(true);
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    productDetails();

    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {/* section1 */}
      <div>
        <img
          src={forca}
          style={{ width: "100vw", height: "400px", opacity: "0.7" }}
        />
        <div
          style={{
            position: "absolute",
            width: "40vw",
            height: "auto",
            top: "20vh",
            left: "50%",
            transform: "translateX(-20%)",
            padding: "30px",
          }}
        >
          <img src={logo} style={{ width: "70px", height: "72px" }}></img>
          <h2 style={{ fontWeight: "bold" }}>Cart</h2>
          <h6>
            <span style={{ fontWeight: "bold" }}>
              Home <i className="fa-solid fa-greater-than"></i>{" "}
            </span>
            {"  "}
            Cart
          </h6>
        </div>
      </div>

      {/* section2 */}
      <div
        style={{ position: "relative", height: "auto" }}
        className="big-section"
      >
        <div
          className="section-header"
          style={{
            width: "50vw",
            background: "#F9F1E7",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
            marginLeft: "115px",
            alignItems: "center",
            marginBottom: "3vw",
          }}
        >
          <span>
            <h4>Product</h4>
          </span>
          <span>
            <h4>Price</h4>
          </span>
          <span style={{ display: "flex", gap: "30px" }}>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </span>
        </div>

        <div className="section-content">
          {loading ? (
            <div className="text-center">
              <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <div className="container">
              <div className="row col-lg-6">
                {cartItems.length === 0 ? (
                  <p>No items in cart.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className=" row section-content">
                      <img
                        className="product-image img-fluid mt-3"
                        src={`${
                          item.images[0]
                        }?timestamp=${new Date().getTime()}`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = section41;
                          e.target.style.width = "100px";
                          e.target.style.height = "90px";
                        }}
                        style={{ width: "100px", height: "90px" }}
                      />
                      <div
                        key={index}
                        className=" d-flex"
                        style={{
                          width: "400px",
                          justifyContent: "space-evenly",
                          fontSize: "10px",
                          gap: "10px",
                        }}
                      >
                        <h6 className="light mt-5">
                          {item.title.split(" ").splice(0, 2).join("")}
                        </h6>
                        <h6 className="light mt-5">{item.price} EGP</h6>
                        <div
                          className="mt-5"
                          style={{
                            border: "1px solid gray",
                            width: "20px",
                            height: "20px",
                            textAlign: "center",
                            paddingTop: "2px",
                            fontWeight: "bold",
                          }}
                        >
                          {Math.floor(Math.random() * 5) + 1}
                        </div>
                        <h6 className="mt-5" style={{ fontWeight: "bold" }}>
                          {item.price} EGP
                        </h6>
                        <i
                          className="fa-solid fa-trash mt-5"
                          style={{
                            color: "#B88E2F",
                            width: "21px",
                            height: "21.88px",
                            fontSize: "20px",
                          }}
                        ></i>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className="cart-totals"
          style={{
            marginLeft: "40px",
            background: "#F9F1E7",
            width: "auto",
            height: "400px",
            position: "absolute",
            textAlign: "center",
            top: "0",
            left: "45%",
            transform: "translateX(50%)",
            padding: "40px 0",
            lineHeight: "50px",
          }}
        >
          <h1>Cart Totals</h1>
          <div
            style={{ display: "flex", gap: "30px", padding: "0 80px" }}
            className="total"
          >
            <p>Subtotal</p>
            <p>
              Rs {cartItems.reduce((total, item) => total + item.price, 0)}.00
            </p>{" "}
          </div>
          <div
            className="total"
            style={{
              display: "flex",
              gap: "30px",
              padding: "0 80px",
              alignItems: "center",
            }}
          >
            <p>Total</p>
            <h5 style={{ color: "#B88E2F" }}>
              Rs {cartItems.reduce((total, item) => total + item.price, 0)}.00{" "}
            </h5>
          </div>
          <button className="btn btn-outline-dark">Check Out</button>
        </div>
      </div>

      <div>
        <Menu />
      </div>
    </div>
  );
}
