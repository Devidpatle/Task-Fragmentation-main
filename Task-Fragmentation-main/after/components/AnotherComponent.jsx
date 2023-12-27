import React, { useState } from 'react';

const AnotherComponent = ({ onButtonClick }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    // Add your button click logic here
    setCount(count + 1);
    onButtonClick(); // Notify the parent component about the button click
  };

  return (
    <div>
      <h2>Another Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default AnotherComponent;
