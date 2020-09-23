import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Pets from '../Pets/Pets.jsx';

function App() {
  return (
    <Router >
      <Pets />
    </Router>
  );
}

export default App;
