import React, { Component } from 'react';
import './App.css';

import owners from '../owners/owners'

function App() {
  return (
    <h4>Hello.</h4>
    <owners/>
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Pets from '../Pets/Pets.jsx';



export default App;
