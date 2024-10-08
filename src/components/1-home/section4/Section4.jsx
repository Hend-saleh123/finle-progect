import React from "react";
import section41 from "../../images/section41.png";
import section42 from "../../images/section42.png";
import section23 from "../../images/section23.png";
import forca from "../../images/forca.jpeg";

export default function Section4() {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          background: "#FCF8F3",
          width: "100%",
          height: "600px",
          padding: "0 100px",
          marginTop: "40px",
        }}
      >
        <div style={{ flex: 1, paddingRight: "50px" }}>
          <h2 style={{ fontWeight: "bold", width: "350px" }}>
            50+ Beautiful rooms inspiration
          </h2>
          <p style={{ width: "350px", lineHeight: "40px" }}>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button
            style={{
              width: "150px",
              height: "34px",
              border: "none",
              background: "#B88E2F",
              color: "white",
              borderRadius: "1px",
            }}
          >
            Explore More
          </button>
        </div>

        <div className="container" style={{ flex: 2 }}>
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* العنصر الأول يحتوي على صورتين */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={section41}
                      className="d-block w-100"
                      alt="First Image"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={section42}
                      className="d-block w-200"
                      alt="Second Image"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>

              {/* العنصر الثاني يحتوي على صورتين */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={section23}
                      className="d-block w-100"
                      alt="Third Image"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={forca}
                      className="d-block w-100"
                      alt="Fourth Image"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>

              {/* العنصر الثالث يحتوي على صورتين */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={forca}
                      className="d-block w-100"
                      alt="Fifth Image"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={section41}
                      className="d-block w-200"
                      alt="Sixth Image"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
