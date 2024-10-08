import React from "react";

export default function Menu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap", 
        background: "#F9F1E7",
        width: "100%",
        height: "auto",
        padding: "20px", 
        marginTop:"20vw"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <i
          className="fa-solid fa-trophy"
          style={{ fontSize: "50px", height: "70px" }}
        ></i>
        <div>
          <h3 style={{ fontWeight: "bold" }}>High Quality</h3>
          <p className="colorlight">Crafted from top materails</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <i
          className="fa-regular fa-circle-check"
          style={{ fontSize: "50px", height: "70px" }}
        ></i>
        <div>
          <h3 style={{ fontWeight: "bold" }}>Warranty Protection</h3>
          <p className="colorlight">Over 2 years</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <i
          className="fa-solid fa-hand-holding-heart"
          style={{ fontSize: "50px", height: "70px" }}
        ></i>
        <div>
          <h3 style={{ fontWeight: "bold" }}>Free Shipping</h3>
          <p className="colorlight">Order over 150 $</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <i
          className="fa-solid fa-lock"
          style={{ fontSize: "50px", height: "70px" }}
        ></i>
        <div>
          <h3 style={{ fontWeight: "bold" }}>24 / 7 Support</h3>
          <p className="colorlight">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
