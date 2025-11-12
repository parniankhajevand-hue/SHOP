/*import { useState } from "react";

export default function ProductForm({ setProducts }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("نام محصول را وارد کنید!");

    try {
      const response = await fetch("https://your-api.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        alert("محصول با موفقیت اضافه شد!");
        setProducts(prev => [...prev, { name }]);
        setName("");
      } else {
        alert("خطا در ارسال محصول!");
      }
    } catch (err) {
      alert("خطا در اتصال به سرور!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="نام محصول"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "5px", flex: 1 }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>افزودن محصول</button>
    </form>
  );
}
*/
