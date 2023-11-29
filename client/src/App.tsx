import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className='text-7xl'>Hello, World</h1>
      <p>{greeting}</p>
    </>
  );
}

export default App;
