import { useState } from "react";
const empty = { name: "", price: "", category: "" };
export default function App() {
  const [f, setF] = useState(empty);
  const [list, setList] = useState([]);
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const add = (e) => {
    e.preventDefault();
    setList([...list, { id: Date.now(), ...f }]);
    setF(empty);
  };
  return (
    <div className="app">
      <h1>Add Product (Create)</h1>
      <form className="card" onSubmit={add}>
        <input name="name" placeholder="Product name" value={f.name} onChange={change} required />
        <input name="price" type="number" placeholder="Price" value={f.price} onChange={change} required />
        <input name="category" placeholder="Category" value={f.category} onChange={change} required />
        <button type="submit">Add Product</button>
      </form>
      <div className="card">
        <h2>Products ({list.length})</h2>
        {list.length === 0 && <p>No products yet.</p>}
        <ul>
          {list.map((p) => (
            <li key={p.id}><span>{p.name} ({p.category})</span><b>Rs. {p.price}</b></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
