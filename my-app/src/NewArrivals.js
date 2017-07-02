import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class NewArrivals extends Component {
  state = {
    products: [{"_id":"5952e0388076f64a5a763e2f","name":"Adidas Yeezy Boost 350 V2 Zebra","category":"Yeezy Boost","description":"Condition: New","imageUrl":"localhost:8080/productImages/yeezy-zebra.jpg","quantity":5,"originalPrice":220,"discountedPrice":200,"isInStock":true,"__v":0,"modifyDate":"2017-06-27T22:46:16.867Z","forSaleDate":"2017-06-27T22:46:16.867Z","isOnSale":false,"soldQuantity":0},
    {"_id":"5952e2568076f64a5a763e33","name":"Adidas Yeezy Boost 350 V2 Cream White","category":"Yeezy Boost","description":"Condition: Old","imageUrl":"localhost:8080/productImages/yeezy-white.jpg","quantity":10,"originalPrice":220,"discountedPrice":200,"isInStock":true,"__v":0,"modifyDate":"2017-06-27T22:55:18.612Z","forSaleDate":"2017-06-27T22:55:18.612Z","isOnSale":false,"soldQuantity":0}]
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(function(product, index) {
            return (
              <Thumbnail
                key={product._id}
                imgUrl={'http://'+product.imageUrl}
                imgLabel = {product.name}
                imgDescription = {product.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default NewArrivals;
