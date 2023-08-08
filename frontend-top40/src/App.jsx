import React, { useState, useEffect } from 'react';

function App() {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/fetch_yahoo_data")
      .then(response => response.json())
      .then(data => {
        setStockData(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const stockNames = Object.keys(stockData);

  return (
    <div className="App">
      <h1>Stock Names</h1>
      <ul>
        {stockNames.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
