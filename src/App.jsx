import { useState } from 'react'

import './App.css'
import QuizApp from './QuizApp';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <QuizApp />
    </>
  );
}

export default App
