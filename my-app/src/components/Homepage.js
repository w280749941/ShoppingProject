import React, { Component } from 'react';
import VisibleBodyList from '../containers/VisibleBodyList';
import { receivedData } from '../actions';
import store from '../index';

class Homepage extends Component {
  componentWillMount() {
    fetch('http://localhost:8080/products').then(response => {
      return response.json(); })
      .then(data => {
          store.dispatch(receivedData(data));
        });
  }
  render() {
    return (
      <VisibleBodyList />
    );
  }
}

export default Homepage;
