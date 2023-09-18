// ThemeToggle.jsx
import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add logic here to switch your application's theme between light and dark mode.
    // For example, you can toggle CSS classes on the root element to apply different styles.
  };

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">Dark Mode</span>
    </div>
  );
}

export default ThemeToggle;
