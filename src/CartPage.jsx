import React from "react";

export default function CartPage({ cart, removeFromCart, updateQuantity, clearCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const increaseQty = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  const decreaseQty = (id, currentQty) => {
    if (currentQty > 1) updateQuantity(id, currentQty - 1);
  };

  return (
    <div style={{ marginTop: 20, fontFamily: "secondary-font" }}>
      <h2>سبد خرید ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                borderBottom: "1px dashed #ccc",
                paddingBottom: 8,
                fontFamily: "secondary-font", // ✅ فونت روی هر آیتم
              }}
            >
              <div
                style={{
                  flex: 1,
                  fontSize: "17px",
                  fontWeight: "bold",
                }}
              >
                <strong>{item.title}</strong> <br />
                <small>
                  قیمت: قرون {item.price}{" "}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <button
                      onClick={() => decreaseQty(item.id, item.qty)}
                      style={{
                        backgroundColor: "#91df98ff",
                        border: "none",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                        fontFamily: "secondary-font",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        width: 20,
                        textAlign: "center",
                        fontFamily: "secondary-font",
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id, item.qty)}
                      style={{
                        backgroundColor: "#589947",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontFamily: "secondary-font",
                      }}
                    >
                      +
                    </button>
                  </div>
                </small>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "#589947ff",
                  color: "white",
                  border: "none",
                  padding: "10px 10px",
                  borderRadius: 10,
                  fontSize: "16px",
                  fontFamily: "secondary-font",
                }}
              >
                گذاشتم سر جاش
              </button>
            </div>
          ))}

          <div
            style={{
              marginTop: 15,
              fontWeight: "bold",
              fontSize: "18px",
              fontFamily: "secondary-font",
            }}
          >
            مجموع قیمت : قرون {totalPrice.toFixed(2)}
          </div>

          <button
            onClick={clearCart}
            style={{
              marginTop: 10,
              backgroundColor: "#589947ff",
              color: "white",
              border: "none",
              padding: "15px 20px",
              borderRadius: 10,
              fontSize: "15px",
              fontFamily: "secondary-font",
            }}
          >
            محصولاتون آشغاله میرم مغازه بغلی
          </button>
        </>
      )}
    </div>
  );
}
