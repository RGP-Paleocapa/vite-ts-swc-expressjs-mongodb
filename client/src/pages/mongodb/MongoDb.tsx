import { useState, useEffect } from 'react';

// Define a type for your item
type Item = {
  _id: string;
  name: string;
  description: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);

  // Function to fetch items
  const fetchItems = () => {
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => setItems(data as Item[]))
      .catch(error => console.error('Error fetching items:', error));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Function to add a new item
  const addItem = async () => {
    const newItem = { name: "New Item", description: "Description of new item" };
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
    fetchItems();
  };

  // Function to delete an item
  const deleteItem = async (id: string) => {
    await fetch(`http://localhost:3000/api/items/${id}`, {
      method: 'DELETE',
    });
    fetchItems();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-3xl font-bold mb-4'>Item List</h1>
      <button 
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Item
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => deleteItem(item._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
