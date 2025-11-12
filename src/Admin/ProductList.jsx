/*export default function ProductList({ products, setProducts }) {
  const handleDelete = async (index) => {
    const response = await fetch("https://your-api.com/products/1", { method: "DELETE" });
    if (response.status === 200) {
      alert("محصول حذف شد!");
      setProducts(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <ul>
      {products.map((p, i) => (
        <li key={i}>
          {p.name} <button onClick={() => handleDelete(i)}>حذف</button>
        </li>
      ))}
    </ul>
  );
}*/
