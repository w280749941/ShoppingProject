import React, { Component } from 'react';
import VisibleBodyList from '../containers/VisibleBodyList';
import { receivedData } from '../actions';
import store, { restUrl } from '../index';

class Homepage extends Component {
  componentWillMount() {
    fetch(restUrl+'/products').then(response => {
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
