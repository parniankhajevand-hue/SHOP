import React, { useEffect, useState } from "react";
import useCartStore from "./store/CartStore";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>فروشگاه من و شرکا</h1>
      <Link to="/cart">سبد خرید 🛒</Link>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 10,
              margin: 10,
              width: 200,
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: 150, objectFit: "contain" }}
            />
            <h4>{product.title}</h4>
            <p>{product.price} $</p>
            <button onClick={() => addToCart(product)}>افزودن به سبد</button>
          </div>
        ))}
      </div>
    </div>
  );
}
