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
