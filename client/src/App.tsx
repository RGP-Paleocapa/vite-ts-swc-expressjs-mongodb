import { useState, useEffect } from 'react';
import './App.css';

// Define a type for your item
type Item = {
  _id: string;
  name: string;
  description: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => setItems(data as Item[]))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  // Function to add a new item
  const addItem = async () => {
    const newItem = { name: "New Item", description: "Description of new item" };
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
    // Reload items after adding
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => setItems(data as Item[]))
      .catch(error => console.error('Error fetching items:', error));
  };

  return (
    <>
      <h1 className='text-7xl'>Hello, World</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
