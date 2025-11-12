import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import AdminLogin from "./Admin/AdminLogin";
 // 📌 صفحه لاگین

// 📌 ایمپورت فایل فونت
import "./font/secondary-aviny.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("خطا در دریافت محصولات:", err));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ fontFamily: "secondary-font, sans-serif", padding: 20 }}>
      <header
        style={{
          backgroundColor: "#43a047",
          color: "white",
          padding: 20,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h1>فروشگاه من و شرکا</h1>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* ✅ ورود سمت چپ */}
          <Link
            to="/login"
            style={{
              backgroundColor: "#296e16ff",
              color: "white",
              padding: "8px 18px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ورود به حساب
          </Link>

          {/* ✅ بقیه دکمه‌ها سمت راست */}
          <div style={{ display: "flex", gap: 10 }}>
            <Link
              to="/"
              style={{
                backgroundColor: "#296e16ff",
                color: "white",
                padding: "8px 18px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              صفحه اصلی بازار
            </Link>

            <Link
              to="/cart"
              style={{
                backgroundColor: "#296e16ff",
                color: "white",
                padding: "8px 18px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              جارو کن ببر ({cart.length})
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/login" element={<AdminLogin />} />
 {/* ✅ مسیر لاگین */}
      </Routes>
    </div>
  );
}

// 🛍 صفحه لیست محصولات
function ProductList({ products, addToCart, cart, updateQuantity, searchTerm, setSearchTerm }) {
  if (!products.length) return <p style={{ fontFamily: "secondary-font" }}>در حال بارگذاری محصولات...</p>;

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", fontFamily: "secondary-font" }}>
      <input
        type="text"
        placeholder="...بچرخ تو بازار"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "3px solid #53b360ff",
          fontSize: "16px",
          backgroundColor: "#b2eabcff",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((p) => {
          const inCart = cart.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              style={{
                border: "1px solid #005703",
                borderRadius: 10,
                padding: 10,
                width: 220,
                textAlign: "center",
                fontFamily: "secondary-font",
              }}
            >
              <Link
                to={`/product/${p.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    maxWidth: "100%",
                    height: 150,
                    objectFit: "contain",
                    marginBottom: 10,
                  }}
                />
                <h4 style={{ fontSize: "14px", height: 40 }}>{p.title}</h4>
              </Link>

              <p> قرون {p.price}</p>

              {!inCart ? (
                <button
                  onClick={() => addToCart(p)}
                  style={{
                    backgroundColor: "#296e16ff",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: 5,
                    cursor: "pointer",
                    marginTop: 10,
                  }}
                >
                  بیا این ور بازار
                </button>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 10,
                  }}
                >
                  <button
                    onClick={() =>
                      updateQuantity(p.id, inCart.qty > 1 ? inCart.qty - 1 : 1)
                    }
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      border: "2px solid #296e16ff",
                      backgroundColor: "#91df98ff",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>
                  <span style={{ minWidth: 20, textAlign: "center", fontWeight: "bold" }}>
                    {inCart.qty}
                  </span>
                  <button
                    onClick={() => updateQuantity(p.id, inCart.qty + 1)}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      border: "2px solid #296e16ff",
                      backgroundColor: "#589947",
                      color: "white",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
