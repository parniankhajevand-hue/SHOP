/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "./store/CartStore.js";

const API = "https://fakestoreapi.com/products";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>محصولات</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 30,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "3px solid #5ba064ff",
              borderRadius: 90,
              padding: 10,
              textAlign: "center",
              boxShadow: "0 5px 5px rgba(89, 214, 120, 1)",
            }}
          >
            <Link
              to={'/product/${p.id}'}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100%", height: 150, objectFit: "contain" }}
              />
              <h4 style={{ margin: "10px 0" }}>{p.title}</h4>
            </Link>

            <button
              onClick={() => addToCart(p)}
              style={{
                marginTop: 10,
                padding: "20px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              افزودن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}*/
/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "./store/cartStore";

const API = "https://fakestoreapi.com/products";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    fetch(API).then(r => r.json()).then(setProducts);
  }, []);

  return (
    <div>
      <h2>محصولات</h2>

      <div style={{display: "grid", gridTemplateColumns:"repeat(auto-fill,200px)", gap:20}}>
        {products.map((p) => (
          <div key={p.id} style={{border:"1px solid #4CAF50", padding:10}}>

            <Link to={`/product/${p.id}`}>
              <img src={p.image} style={{width:"100%", height:150, objectFit:"contain"}} />
              <h4>{p.title}</h4>
            </Link>

            <button onClick={() => addToCart(p)}>افزودن</button>
          </div>
        ))}
      </div>
    </div>
  );
}*/
// HomePage.jsx
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
            {/* لینک به صفحه محصول */}
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

            {/* دکمه اضافه کردن به سبد خرید */}
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