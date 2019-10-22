import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
      <div className="app">
        <Route exact path="/"
        component={HomePage}>    
        </Route>
      </div>
    </Router>
  );
}

export default App;
