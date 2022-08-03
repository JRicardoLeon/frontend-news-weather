import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import History from './components/History'
import Weather from './components/Weather'
import News from './components/News'

import './App.css';

function App() {
  return (
    <Router>
      <div className="container p-4">
        <Route path="/" exact component={Weather} />
        <Route path="/" exact component={News} />
        <Route path="/" exact component={History} />
      </div>
    </Router>
  );
}

export default App;
