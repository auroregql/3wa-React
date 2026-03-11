import { useState } from 'react';

const List = () => {
  const [fruits, setFruits] = useState([
    "banane",
    "orange",
    "pomme",
    "citron",
    "mangue"
  ]);
  
  const removeLastFruit = () => {
    setFruits(fruits.slice(0, fruits.length - 1));
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <button onClick={removeLastFruit}>Supprimer le dernier fruit</button>
    </>
  );
}

export default List;
