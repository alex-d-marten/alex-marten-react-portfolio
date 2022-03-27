import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {  
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Project} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={Resume} />
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
