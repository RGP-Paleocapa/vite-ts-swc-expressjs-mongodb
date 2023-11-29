type Item = {
  _id: string;
  name: string;
  description: string;
};

type ItemListProps = {
  items: Item[];
  onDeleteItem: (id: string) => void;
};

function ItemList({ items, onDeleteItem }: ItemListProps) {
  return (
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
                onClick={() => onDeleteItem(item._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
