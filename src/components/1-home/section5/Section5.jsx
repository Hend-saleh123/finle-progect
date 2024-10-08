import React from "react";
import section51 from "../../images/section51.png";
import section52 from "../../images/section52.png";
import section53 from "../../images/section53.png";
import section54 from "../../images/section54.png";
import section55 from "../../images/section55.png";
import section56 from "../../images/section56.png";
import section57 from "../../images/section57.png";
import section58 from "../../images/section58.png";
import section59 from "../../images/section59.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Section5() {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <div
          style={{
            width: "100vw",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          className="section5respon"
        >
          <div style={{ textAlign: "center", margin: "60px 0" }}>
            <p>Share your setup with</p>
            <h2 style={{ fontWeight: "bold" }}>#FuniroFurniture</h2>
          </div>
          <div className="mt-5 mb-5 c">
            <Masonry columnsCount={5} gutter="10px">
              <img
                src={section51}
                style={{
                  width: "100%",
                  height: "450px", 
                  display: "block",
                  marginTop: "-60px",
                }}
                alt="section51"
              />

              <img
                src={section52}
                style={{
                  width: "100%",
                  height: "400px",
                  display: "block",
                  marginTop: "20px",
                }}
                alt="section52"
              />

              <img
                src={section53}
                style={{
                  width: "100%",
                  height: "400px", 
                  display: "block",
                  marginTop: "80px",
                }}
                alt="section53"
              />

              <img
                src={section54}
                style={{
                  width: "100%",
                  height: "360px", 
                  display: "block",
                  marginTop:"40px"

                }}
                alt="section54"
              />

              <img
                src={section55}
                style={{
                  width: "100%",
                  height: "400px",
                  display: "block",
                  marginTop:"-70px"
                }}
                alt="section55"
              />

              <img
                src={section56}
                style={{
                  width: "100%",
                  height: "300px", 
                  display: "block",
                }}
                alt="section56"
              />

              <img
                src={section57}
                style={{
                  width: "100%",
                  height: "200px", 
                  display: "block",
                }}
                alt="section57"
              />

              <img
                src={section58}
                style={{
                  width: "100%",
                  height: "300px", 
                  display: "block",
                  marginLeft:"270px",
                  marginTop:"-70px"
                }}
                alt="section58"
              />

              <img
                src={section59}
                style={{
                  width: "100%",
                  height: "300px", 
                  display: "block",
                  marginLeft:"280px"
                }}
                alt="section59"
              />
            </Masonry>
          </div>
        </div>
      </ResponsiveMasonry>
    </>
  );
}
