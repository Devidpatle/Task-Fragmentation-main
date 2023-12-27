import React from 'react';
import AnotherComponent from './AnotherComponent'; // Update the path based on your actual folder structure

const SomeComponent = ({ data }) => {
  // Add your UI rendering logic here
  return (
    <div>
      <h2>Some Component</h2>
      {/* Render UI based on the data */}
      <p>{data}</p>

      {/* Render AnotherComponent and pass data to it */}
      <AnotherComponent data={data} />
    </div>
  );
};

export default SomeComponent;
