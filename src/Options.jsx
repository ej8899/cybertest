// Options.jsx
import React from 'react';

function Options({ options, onAnswerClick }) {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerClick(option)}
          style={{ margin: '10px', padding: '5px 10px' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
