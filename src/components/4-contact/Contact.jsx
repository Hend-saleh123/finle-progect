import React from 'react';
import Menu from '../menu/Menu';
import forca from "../images/forca.jpeg";
import logo from "../images/logo.png";

export default function Contact() {
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
          <h2 style={{ fontWeight: "bold" }}>Contact</h2>
          <h6>
            <span style={{ fontWeight: "bold" }}>
              Home <i class="fa-solid fa-greater-than"></i>
            </span>
            {"   "}
            Contact
          </h6>
        </div>
      </div>

      {/* section2 */}
      <div className="text-center mt-5 mb-5">
        <h2>Get In Touch With Us</h2>
        <p style={{ width: "650px", margin: "auto" }}>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* section3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          margin: "auto",
          gap: "70px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div style={{ flex: 1, paddingRight: "50px", marginTop: "30px" }}>
          <div className="flex" style={{ width: "250px" }}>
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex" style={{ width: "250px" }}>
            <i class="fa-solid fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex" style={{ width: "250px" }}>
            <i class="fa-solid fa-clock"></i>
            <div>
              <h3>Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, paddingRight: "50px", lineHeight: "50px" }}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Your name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Abc"
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
              placeholder="Abc@def.com"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Subject
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="This is an optional"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Hi! i’d like to ask about"
            ></textarea>
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

        
        <div></div>
      </div>


      {/* section4 */}
      <Menu />
    </>
  );
}
