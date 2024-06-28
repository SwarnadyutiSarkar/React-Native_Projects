import React, { useState } from 'react';
import './App.css';

const toppingsList = [
  'Pepperoni',
  'Mushrooms',
  'Onions',
  'Sausage',
  'Bacon',
  'Extra cheese',
  'Black olives',
  'Green peppers',
  'Pineapple',
  'Spinach'
];

function App() {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingChange = (topping) => {
    setSelectedToppings((prevSelectedToppings) =>
      prevSelectedToppings.includes(topping)
        ? prevSelectedToppings.filter((t) => t !== topping)
        : [...prevSelectedToppings, topping]
    );
  };

  const handleSubmit = () => {
    alert(`You have selected: ${selectedToppings.join(', ')}`);
  };

  return (
    <div className="App">
      <h1>Build Your Pizza</h1>
      <div className="toppings-list">
        {toppingsList.map((topping) => (
          <div key={topping} className="topping-item">
            <label>
              <input
                type="checkbox"
                checked={selectedToppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Order Pizza</button>
    </div>
  );
}

export default App;
