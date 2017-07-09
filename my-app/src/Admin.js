import React, { Component } from 'react';
import AdminThumbnail from './AdminThumbnail';

class Admin extends Component {

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
              <AdminThumbnail
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

export default Admin;
