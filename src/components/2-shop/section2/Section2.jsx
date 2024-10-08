import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { CartContext } from "../../contaxt/CartContext";
import section41 from "../../images/section41.png";

export default function FeatureProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visableProduct, setVisableProduct] = useState(12);
  const { addToCart } = useContext(CartContext);

  async function getProducts() {
    try {
      let { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleMore = () => {
    setVisableProduct(visableProduct + 12);
  };

  return (
    <>
      <h2 className="text-center mt-3">Our Products</h2>
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
        <div className="container mt-4">
          <div className="row gy-4">
            {products.slice(0, visableProduct).map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-4">
                <Link to={`/singleproject/${product.id}`} className="link">
                  <div
                    className=""
                    style={{ background: "#F4F5F7", padding: "2px" }}
                  >
                    <img
                      className="product-image img-fluid"
                      src={`${
                        product.images[0]
                      }?timestamp=${new Date().getTime()}`}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = section41;
                        e.target.style.width = "100%";
                        e.target.style.height = "255px";
                      }}
                    />

                    <span className="font-sm text-main">
                      {product.category.name}
                    </span>
                    <h3 className="h5">
                      {product.title.split(" ").splice(0, 2).join(" ")}
                    </h3>
                    <div className="d-flex py-3 justify-content-between align-items-center">
                      <span className="font-sm">{product.price} EGP</span>
                      <span className="font-sm">
                        <i className="fa fa-star rating-color me-2"></i>
                      </span>
                    </div>
                    <button
                      className="btn btn-success taxt-main-light"
                      onClick={() => addToCart(product)}
                        style={{
                        background: "white",
                        width: "150px",
                        
                        color: "#B88E2F",
                        border:"1px solid ",
                        borderRadius:"5px"
                      }}>
                    
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
            {visableProduct < products.length && (
              <div className="text-center my-4">
                <button
                  className="btn btn-light taxt-main-light"
                  style={{
                    background: "white",
                    width: "200px",
                    margin: "20px 0",
                    color: "#B88E2F",
                    border: "1px solid",
                  }}
                  onClick={handleMore}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
