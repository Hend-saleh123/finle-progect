import React from "react";
import section21 from "../../images/section21.png";
import section22 from "../../images/section22.png";
import section23 from "../../images/section23.png";

export default function Section2() {
  return (
    <>
      <div className="text-center mt-5 mb-5 ">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
            <img
              style={{ height: "450px" }}
              src={section21}
              className="img-fluid rounded shadow"
              alt="Dining"
            />
            <h2 className="mt-3">Dining</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img
              style={{ height: "450px" }}
              src={section22}
              className="img-fluid rounded shadow"
              alt="Living"
            />
            <h2 className="mt-3">Living</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img
              style={{ height: "450px" }}
              src={section23}
              className="img-fluid rounded shadow"
              alt="Bedroom"
            />
            <h2 className="mt-3">Bedroom</h2>
          </div>
        </div>
      </div>
    </>
  );
}
