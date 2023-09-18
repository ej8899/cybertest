// Options.jsx
import React from 'react';

function Options({ options, onAnswerClick }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          className="option selected-answer" // Add the selected-answer class here
          onClick={() => onAnswerClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
