import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Resume></Resume>
    </div>
  );
}

export default App;
