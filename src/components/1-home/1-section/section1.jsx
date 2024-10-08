import React from "react";
import amgheader from "../../images/amgheader.jpeg";
export default function Section() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={amgheader} style={{ width: "100%", height: "712.53px" }} />
        <div
          style={{
            position: "absolute",
            width: "40vw", 
            height: "auto",
            top: "35vh", 
            left: "55%", 
            transform: "translateX(-5%)",
            background: "#FFF3E3",
            padding: "30px",
          }}
        >
          <span style={{ fontWeight: "600" }}>New Arrival</span>
          <h1 style={{ color: "#B88E2F" }}>Discover Our New Collection</h1>
          <p>
            Lorem ipsum, accusantium corporis iure! dolor sit amet consectetur{" "}
          </p>
          <button
            style={{
              background: "#B88E2F",
              border: "none",
              width: "200px",
              height: "54px",
              color: "#fff",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
