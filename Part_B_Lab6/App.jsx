
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  // Fetch items from backend
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  // Load items when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  // Add a new item
  const addItem = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter an item name");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name })
      });

      const newItem = await response.json();

      setItems([...items, newItem]);
      setName("");

    } catch (error) {
      console.log("Error adding item:", error);
    }
  };

  // Delete an item
  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE"
      });

      setItems(items.filter((item) => item.id !== id));

    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="container">
      <h1>Item Manager</h1>
      <p>Manage your items using React and Fetch API</p>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <h2>My Items</h2>

      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}

              <button
                className="delete"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
