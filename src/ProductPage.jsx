import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useCartStore from "./store/CartStore.js";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ fontFamily: "secondary-font" }}>در حال بارگذاری...</p>;
  if (!product) return <p style={{ fontFamily: "secondary-font" }}>محصول پیدا نشد </p>;

  return (
    <div
      className="main"
      style={{ padding: "20px", maxWidth: 600, margin: "0 auto", fontFamily: "secondary-font" }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#589947", fontFamily: "secondary-font" }}>
        بازگشت
      </Link>

      <div style={{ textAlign: "center", fontFamily: "secondary-font" }}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
          style={{ width: 200, height: 200, objectFit: "contain", marginTop: 20 }}
        />

        <h2 style={{ marginTop: 10 }}>{product.title}</h2>
        <p style={{ color: "#555", fontSize: "14px" }}>{product.description}</p>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}> قیمت: قرون {product.price}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            margin: "15px 0",
          }}
        >
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            style={{
              width: 45,
              height: 45,
              borderRadius: "50%",
              border: "2px solid #589947",
              backgroundColor: "#91df98ff",
              fontSize: 18,
              cursor: "pointer",
              fontFamily: "secondary-font",
            }}
          >
            −
          </button>
          <span
            style={{
              fontSize: "16px",
              minWidth: 25,
              textAlign: "center",
              fontFamily: "secondary-font",
            }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            style={{
              width: 45,
              height: 45,
              borderRadius: "50%",
              border: "2px solid #1a501fff",
              backgroundColor: "#589947",
              color: "white",
              fontSize: 20,
              cursor: "pointer",
              fontFamily: "secondary-font",
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={() => addToCart(product, qty)}
          style={{
            backgroundColor: "#589947",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: "15px",
            fontFamily: "secondary-font",
          }}
        >
          بنداز {qty} عدد تو سبد خرید
        </button>
      </div>
    </div>
  );
}
