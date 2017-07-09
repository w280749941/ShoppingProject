import React, { Component } from 'react';
import './Body.css';
import Thumbnail from './Thumbnail';

class Body extends Component {
  state = {products: []};
  componentWillMount() {
    fetch('http://localhost:8080/products').then(response => {
      return response.json(); })
      .then(data => {
        this.setState({
          products: data
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(function(product, index) {
            return (
              <Thumbnail
                key={product._id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Body;
