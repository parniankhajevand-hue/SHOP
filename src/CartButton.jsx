import React from "react";
import { Link } from "react-router-dom";

export default function CartButton({ cart }) {
  return (
    <Link
      to="/cart"
      style={{
        display: "inline-block",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "30px 10px",
        borderRadius: "50px",
        fontWeight: "bold",
        textDecoration: "none",
        border-color: rgb(76, 136, 95),
      }}
    >
      🛒سبد ({cart.length})
    </Link>
  );
}
