import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {  
  return (
    <div>
      <Router>
        <Header></Header>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
