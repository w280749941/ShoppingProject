import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class Sales extends Component {
  state = {products: []};
  componentWillMount() {
    fetch('http://localhost:8080/products/onsale')
      .then(response => {
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
export default Sales;