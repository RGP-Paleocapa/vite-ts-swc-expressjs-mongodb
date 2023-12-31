import { useState } from 'react';

type AddItemFormProps = {
  onAddItem: (item: { name: string; description: string }) => void;
};

function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if name and description are not empty
    if (name.trim() !== '' && description.trim() !== '') {
      onAddItem({ name, description });
      setName('');
      setDescription('');
    } else {
      alert('Please fill in all fields.'); // Or handle the error in a more user-friendly way
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mr-2"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="mr-2"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
