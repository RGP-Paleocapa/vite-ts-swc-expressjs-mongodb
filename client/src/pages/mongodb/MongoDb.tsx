import { useEffect, useState } from "react";
import AddItemForm from "../../components/mongodb/AddItemForm";
import ItemList from "../../components/mongodb/ItemList";

type Item = {
  _id: string;
  name: string;
  description: string;
};

function MongoDb() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  // Function to fetch items
  const fetchItems = () => {
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => setItems(data as Item[]))
      .catch(error => console.error('Error fetching items:', error));
  };

  // Update addItem to accept an item parameter
  const addItem = async (item: { name: string; description: string }) => {
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
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
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
}

export default MongoDb;
