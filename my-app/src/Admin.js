import React, { Component } from 'react';
import AdminThumbnail from './AdminThumbnail';
import NewProductForm from './NewProductForm';
class Admin extends Component {
  constructor() {
    super();
    this.state = {products: []};
    this.handleSection = this.handleSection.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:8080/products').then(response => {
      return response.json(); })
      .then(data => {
        this.setState({
          products: data
        });
      });
  }
  handleSection() {
    const targetElement = document.getElementById("newProductForm");
    if(targetElement.style.display === 'block') {
      targetElement.style.display = 'none';
    } else {
      targetElement.style.display = 'block';
    }
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
          <div className="col-sm-4 col-md-3 col-lg-3">
            <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handleSection}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
            <NewProductForm  />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
