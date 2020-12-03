import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Equipment from './components/Equipment/Equipment';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/equipment" component={Equipment}/>
        <Route path="/contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
