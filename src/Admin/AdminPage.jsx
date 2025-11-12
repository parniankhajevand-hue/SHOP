import { useState } from "react";
import ProductForm from "./ProductForm.jsx";

export default function AdminPage() {
  const [products, setProducts] = useState([]);

  const handleDelete = async (index) => {
    try {
      // فرضی ارسال DELETE به API
      const response = await fetch(`https://your-api.com/products/${index}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("محصول حذف شد!");
        setProducts(prev => prev.filter((_, i) => i !== index));
      } else {
        alert("خطا در حذف محصول!");
      }
    } catch (err) {
      alert("خطا در اتصال به سرور!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>پنل ادمین</h2>

      <h3>افزودن محصول</h3>
      <ProductForm setProducts={setProducts} />

      <h3>محصولات موجود</h3>
      <ul>
        {products.map((p, index) => (
          <li key={index} style={{ marginBottom: 10 }}>
            {p.name} {" "}
            <button onClick={() => handleDelete(index)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
