import React from "react";
import forca from "../images/forca.jpeg";
import logo from "../images/logo.png";
import Menu from "../menu/Menu";

export default function Checkout() {
  return (
    <>
      {/* section1 */}
      <div>
        <img
          src={forca}
          style={{ width: "100%", height: "400px", opacity: "0.7" }}
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
          <h2 style={{ fontWeight: "bold" }}>Checkout</h2>
          <h6>
            <span style={{ fontWeight: "bold" }}>
              Home <i class="fa-solid fa-greater-than"></i>
            </span>
            {"   "}
            Checkout
          </h6>
        </div>
      </div>

      {/* section2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "900px",
          gap: "100px",
          marginTop: "100px",
          
        }}
        
      >
        <div style={{ flex: "1" }}>
          <h1 className="mb-5">Billing details</h1>
          <div
            class="mb-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <label for="exampleFormControlInput1" class="form-label">
                First Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div>
              <label for="exampleFormControlInput1" class="form-label">
                Last Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Company Name (Optional)
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Country / Region
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Sri Lanka"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Street address
            </label>
            <input
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Town / City{" "}
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Province
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Western Province"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              ZIP code
            </label>
            <input
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Additional information"
            />
          </div>

          <button
            className="btn btn-light taxt-main-light"
            style={{
              background: "#B88E2F",
              width: "200px",
              margin: "20px 0",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>

        <div style={{ flex: "1.5" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontWeight: "bold" }}>Product</h3>
              <p className="light">Asgaard sofa x 1</p>
              <p>Subtotal</p>
              <p>Total</p>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>Subtotal</h3>
              <p>Rs. 250,000.00</p>
              <p>Rs. 250,000.0</p>
              <h2 style={{ color: "#B88E2F" }}>Rs. 250,000.00</h2>
            </div>
          </div>

          <hr></hr>

          <div className="mt-4" style={{ lineHeight: "25px" }}>
            <div
              style={{
                width: "280px",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "black",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              <h4>Direct Bank Transfer</h4>
            </div>

            <div>
              <p className="light">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div>
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    border: "1px solid gray",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                ></div>
                <p>Direct Bank Transfer</p>
              </div>

              <div
                style={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    border: "1px solid gray",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                ></div>
                <p>Direct Bank Transfer</p>
              </div>
            </div>

            <div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <span style={{ fontWeight: "bold" }}>privacy policy.</span>
              </p>
            </div>

            <div>
              <button
                className="btn btn-light taxt-main-light"
                style={{
                  background: "white",
                  width: "300px",
                  height: "54px",
                  borderRadius: "15px",
                  border: "1px solid black",
                  margin: "15px 70px",
                }}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div>
        <Menu />
      </div>
    </>
  );
}
