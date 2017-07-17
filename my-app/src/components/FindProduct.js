import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import restUrl from '../index';

class FindProduct extends Component {
  constructor({match}) {
    super({match});
    this.state = {
      products: [],
      productName: match.params.productName,
    };
  }
  // Load all products then search for product name includes target name
  // Can be chagned to let server do the heavy lifting (search)
  componentWillMount() {
    fetch(restUrl+'/products').then(response => {
      return response.json(); })
      .then(data => {
        const filteredProduct = [];
        data.forEach(ele => {
          if (ele.name.toLowerCase().includes(this.state.productName.toLowerCase())) {
            filteredProduct.push(ele);
          }
        });
        this.setState({
          products: filteredProduct
        });
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.products
          ? (
          <div className="row">
            {this.state.products.map(function(product, index) {
              return (
                <Thumbnail
                  key={product._id}
                  product={product}
                />
              );
            })}
          </div>)
           : (<h1 className="text-center">No result, try a different search</h1>)
        }

      </div>
    );
  }
}

export default FindProduct;
