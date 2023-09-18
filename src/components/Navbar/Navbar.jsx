// Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      logo ---
      
      <a href="/">Home</a> |&nbsp;
      <a href="/logout">Logout</a> |&nbsp;
      <ThemeToggle />
      about
    </nav>
  );
}

export default Navbar;
