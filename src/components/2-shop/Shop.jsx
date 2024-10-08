import React from "react";
import Section2 from "./section2/Section2";
import Menu from "../menu/Menu";
import forca from "../images/forca.jpeg";
import logo from "../images/logo.png";

export default function Shop() {
  return (
    <div>
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
          <h2 style={{ fontWeight: "bold" }}>Shop</h2>
          <h6>
            <span style={{ fontWeight: "bold" }}>
              Home <i class="fa-solid fa-greater-than"></i>
            </span>
            {"   "}
            Shop
          </h6>
        </div>
      </div>

      {/* section2 */}
      <div
        className="shopsetion2"
        style={{
          background: "#F9F1E7",
          width: "100%",
          height: "80px",
          justifyContent: "space-around",
        }}
      >
        <div className="shopsetion2">
          <div className="shopsetion2">
            <i class="fa-solid fa-sliders"></i>
            <span>Filters</span>
            <i class="fa-solid fa-qrcode"></i>
            <i class="fa-solid fa-xmarks-lines"></i>
          </div>
          <div>|</div>
          <div>Showing 1–16 of 32 results</div>
        </div>

        <div
          className="shopsetion2"
          style={{ paddingTop: "15px", alignItems: "center" }}
        >
          <div className="shopsetion2">
            <p>Show</p>
            <p
              style={{
                width: "30px",
                height: "35px",
                textAlign: "center",
                background: "white",
                paddingTop: "5px",
              }}
            >
              16
            </p>
          </div>

          <div className="shopsetion2" style={{ alignItems: "center" }}>
            <p>Short by</p>
            <p
              style={{
                width: "90px",
                height: "35px",
                textAlign: "center",
                background: "white",
                paddingTop: "4px",
              }}
            >
              Default
            </p>
          </div>
        </div>
      </div>

      {/* section3 */}
      <Section2 />

      {/* section4 */}
      <div
        className="flex m-auto mb-5 "
        style={{ gap: "10px", width: "400px" }}
      >
        <div
          className=" mt-5"
          style={{
            width: "60px",
            height: "60px",
            textAlign: "center",
            paddingTop: "18px",
            fontWeight: "bold",
            borderRadius: "10px",
            background: "#B88E2F",
            cursor: "pointer",
          }}
        >
          1
        </div>

        <div
          className=" mt-5"
          style={{
            width: "60px",
            height: "60px",
            textAlign: "center",
            paddingTop: "18px",
            fontWeight: "bold",
            borderRadius: "10px",
            background: "#F9F1E7",
            cursor: "pointer",
          }}
        >
          2
        </div>

        <div
          className=" mt-5"
          style={{
            width: "60px",
            height: "60px",
            textAlign: "center",
            paddingTop: "18px",
            fontWeight: "bold",
            borderRadius: "10px",
            background: "#F9F1E7",
            cursor: "pointer",
          }}
        >
          3
        </div>

        <div
          className=" mt-5"
          style={{
            width: "98px",
            height: "60px",
            textAlign: "center",
            paddingTop: "18px",
            fontWeight: "bold",
            borderRadius: "10px",
            background: "#F9F1E7",
            cursor: "pointer",
          }}
        >
          Next
        </div>
      </div>

      {/* section5 */}
      <Menu />
    </div>
  );
}
