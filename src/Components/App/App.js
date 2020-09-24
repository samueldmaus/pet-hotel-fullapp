import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Pets from '../Pets/Pets.jsx';
import owners from '../owners/owners';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_PETS'})
    this.props.dispatch({ type: 'GET_OWNERS'})
    this.props.dispatch({ type: 'TEST_PETS'})
  }
  
  render() {
    return (
      <Router >
        <Pets />
      </Router>
    );
  }
}

export default connect()(App);
