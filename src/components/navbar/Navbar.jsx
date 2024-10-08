import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../contaxt/CartContext"; 



export default function Navbar({ onCartToggle }) {
  const { cartItems } = useContext(CartContext); 

  return (
    <>
     
        <nav
          className="navbar navbar-expand-lg bg-body-light"
          style={{
            position: "fixed",
            zIndex: "3",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            boxShadow: "5px 5px 10px gray",
          }}
        >
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex align-items-center  ms-5"
              id="navbarTogglerDemo01"
            >
              <div className="collapse navbar-collapse ms-3">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "70px", height: "72px" }}
                />
                <span
                  className="navbar-brand"
                  style={{
                    marginBottom: "20px",
                    width: "100px",
                    height: "31px",
                    fontWeight: "600",
                    fontSize: "30px",
                  }}
                >
                  Furniro
                </span>
              </div>
              <div className="collapse navbar-collapse size">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
                  <li className="nav-item active">
                    <Link
                      className="nav-link text-dark"
                      aria-current="page"
                      to={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to={"/shop"}>
                      Shop
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    aria-current="page"
                    to={"/checkout"}
                  >
                    Checkout
                  </Link>
                </li> */}
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-dark"
                      aria-disabled="true"
                      to={"/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse m">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page">
                      <i className="fa-solid fa-user">!</i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=" ">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/cart/:id"}
                    >
                      <i className="fa-regular fa-heart"></i>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{ position: "relative", width: "50px" }}
                  >
                    <Link
                      className="nav-link"
                      onClick={onCartToggle}
                      aria-current="page"
                    >
                      <i className="fa-solid fa-cart-shopping"> </i>
                      {cartItems.length > 0 && (
                        <div
                          className="rounded-circle d-flex bg-danger justify-content-center align-items-center"
                          style={{
                            color: "white",
                            width: "1rem",
                            position: "absolute",
                            top: -1,
                            left: 60,
                            fontSize: "10px",
                          }}
                        >
                          {cartItems.length}
                        </div>
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </>
  );
}
