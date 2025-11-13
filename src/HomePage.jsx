import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "./store/CartStore.js";
import "./index.css";

const API = "https://fakestoreapi.com/products";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="main">
      <h2>محصولات</h2>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="card">
            
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img"
                style={{ height: 180, objectFit: "contain" }}
              />
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-price">{product.price} $</p>
              </div>
            </Link>

            
            <button
              onClick={() => addToCart(product, 1)}
              style={{
                marginTop: 10,
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              افزودن به سبد خرید
            </button>

           
          </div>
        ))}
      </div>
    </div>
  );

}

