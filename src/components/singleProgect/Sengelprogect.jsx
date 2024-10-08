import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Sengsection3 from "./sengelpsection3/Sengsection3.jsx";
import Senglpection4 from "./senglpsection4/Sengelpsection4.jsx";
import section41 from "../images/section41.png";


export default function Sengelprogect() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  async function productDetails() {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );    

      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    productDetails();

    // التمرير إلى منتصف الصفحة عند التحميل
    window.scrollTo({
      top: window.innerHeight / 50,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* section1 */}

      <div
        className="shopsetion2"
        style={{
          background: "#F9F1E7",
          width: "100%",
          height: "200px",
          justifyContent: "space-evenly",
          display: "flex",
          alignItems: "center",
          paddingTop:"90px"
          
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <span>Home</span>
          <i className="fa-solid fa-greater-than"></i>
          <span>Shop</span>
          <i className="fa-solid fa-greater-than"></i>
          <span> | </span>
          <span>Asgaard sofa</span>
        </div>

        <div></div>
      </div>

      {/* section2 */}
      <div>
        {loading ? (
          <div className="text-center">
            <RotatingLines
              visible={true}
              height="50"
              width="50"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div
            className="container mt-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "90px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "25px",
                flex: "1",
              }}
            >
              <div className="col-md-4">
                {product.images &&
                  product.images.length > 0 &&
                  product.images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="col-6"
                        style={{
                          padding: "10px",
                          background: "#F9F1E7",
                          margin: "10px",
                        }}
                      >
                        <img
                          className="product-image img-fluid mt-3"
                          src={`${image}?timestamp=${new Date().getTime()}`}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = section41;
                            e.target.style.width = "200px";
                            e.target.style.height = "90px";
                          }}
                          style={{
                            width: "auto",
                            height: "90px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    );
                  })}
              </div>

              <div>
                {/* عرض الصورة الأولى في الصف الثاني */}
                {product.images && product.images.length > 0 && (
                  <div
                    style={{
                      background: "#F9F1E7",
                      padding: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    
                    <img
                      className="product-image img-fluid mt-3"
                      src={`${
                        product.images[0]
                      }?timestamp=${new Date().getTime()}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = section41;
                        e.target.style.width = "400px";
                        e.target.style.height = "300px";
                      }}
                      style={{
                        width: "400px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div style={{ flex: "1" }}>
              <div className="product-details">
                <h2 style={{ fontWeight: "bold" }}>{product.title}</h2>
                <h3 className="light">Rs. {product.price} EGP </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    <i className="fa fa-star rating-color me-2" />
                    <i className="fa fa-star rating-color me-2" />
                    <i className="fa fa-star rating-color me-2" />
                    <i className="fa fa-star rating-color me-2" />
                    <i className="fa fa-star rating-color me-2" />
                  </div>
                  <div> | </div>
                  <div>5 Customer Review</div>
                </div>

                {/* عرض بيانات المنتج */}
                <div
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>
                    Description: {product.description}
                  </p>
                </div>
                <span className="light ms-2">Size</span>
                <div
                  style={{
                    width: "400px",
                    display: "flex",
                    gap: "30px",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className=" "
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "5px",
                      background: "#B88E2F",
                    }}
                  >
                    L
                  </div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "5px",
                      background: "#F9F1E7",
                    }}
                  >
                    XL
                  </div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "5px",
                      background: "#F9F1E7",
                    }}
                  >
                    XS
                  </div>
                </div>

                <span className="light ms-2">Color</span>
                <div
                  style={{
                    width: "400px",
                    display: "flex",
                    gap: "30px",
                    padding: "10px",
                  }}
                >
                  <div
                    className=" "
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "50%",
                      background: "#816DFA",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "50%",
                      background: "#000000",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      fontWeight: "",
                      borderRadius: "50%",
                      background: "#B88E2F",
                    }}
                  ></div>
                </div>

                <div
                  style={{
                    width: "450px",
                    display: "flex",
                    gap: "30px",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className=" "
                    style={{
                      width: "150px",
                      height: "60px",
                      paddingTop: "12px",
                      textAlign: "center",
                      borderRadius: "10px",
                      border: "1px solid gray",
                    }}
                  >
                    - L +
                  </div>

                  <div
                    className=" "
                    style={{
                      width: "250px",
                      height: "60px",
                      paddingTop: "12px",
                      textAlign: "center",
                      borderRadius: "10px",
                      border: "1px solid gray",
                    }}
                  >
                    Add To Cart
                  </div>

                  <div
                    className=" "
                    style={{
                      width: "250px",
                      height: "60px",
                      paddingTop: "12px",
                      textAlign: "center",
                      borderRadius: "10px",
                      border: "1px solid gray",
                    }}
                  >
                    + Compare
                  </div>
                </div>
                <hr></hr>

                <div
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  <h5>ID: {product.id}</h5>
                  <p>Price: {product.price} EGP</p>
                  <p>Brand: {product.name}</p>
                  <p>Category: {product.category.name}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <span>Share:</span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        gap: "40px",
                      }}
                    >
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* section3 */}
      <div>
        <Sengsection3 />
      </div>

      {/* section4 */}
      <div>
        <Senglpection4 />
      </div>
    </>
  );
}
