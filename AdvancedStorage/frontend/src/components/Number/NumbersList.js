import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers ? (
        numbers.map((number, i) => <li key={i}>{number}</li>)
      ) : (
        <h4>Add an item to begin</h4>
      )}
    </ul>
  );
};

export default NumbersList;
