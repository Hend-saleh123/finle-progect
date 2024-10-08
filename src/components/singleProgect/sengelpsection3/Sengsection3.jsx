import React from "react";
import sofa from "../../images/sofa.png";
export default function Sengsection3() {
  return (
    <>
      <hr></hr>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "700px",
            margin: "auto",
            marginBottom: "50px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Description</span>
          <span className="light">Additional Information</span>
          <span className="light">Reviews [5]</span>
        </div>

        <div style={{ width: "1000px", margin: "auto" }}>
          <p className="light">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-5 light">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div
          style={{
            margin: "50px auto",
            width: "85%",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",

          }}
        >
          <img
            src={sofa}
            style={{
              width: "600px",
              height: "350px",
              background: " #F9F1E7",
              paddingBottom: "50px",
            }}
          ></img>
          <img
            src={sofa}
            style={{
              width: "600px",
              height: "350px",
              background: " #F9F1E7",
              paddingBottom: "50px",
            }}
          ></img>
        </div>
      </div>
    </>
  );
}
