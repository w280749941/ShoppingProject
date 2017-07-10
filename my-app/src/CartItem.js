import React from 'react';
import './CartItem.css';

// Display discountedPrice if on sale
const CartItem = props => {
  const myProduct = props.products;
  const product = myProduct.product;
  // Add quantiy to cart
  const addQuantity = (e) => {
    const index = localStorage.itemCount;
    localStorage.setItem('item'+index, JSON.stringify(product));
    localStorage.itemCount = Number(index) + 1;
    window.location.reload();
    /*
    const counter = Number(e.target.previousSibling.innerHTML) + 1;
    e.target.previousSibling.innerHTML = counter;
    */
  }

  // Reduce quantity
  const reduceQuantity = (e) => {
    //const counter = Number(e.target.nextSibling.innerHTML);
    const index = localStorage.itemCount;
    // Or I can pass a callback function from parent class component to update state to update DOM.
    for (let key in localStorage) {
      if(typeof(localStorage[key]) === "string") {
        if(!JSON.parse(localStorage[key]).hasOwnProperty('_id')) {
          continue;
        } else {
          if(product._id === JSON.parse(localStorage[key])._id) {
            localStorage.removeItem(key);
            break;
          }
        }
      }
    }
    localStorage.itemCount = Number(index) - 1;
    window.location.reload();
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3 col-lg-3">
          <a href="#" className="thumbnail">
            <img src={'http://'+product.imageUrl} alt=""/>
            <div className="caption">
              <p><strong>{product.name}</strong></p>
            </div>
          </a>
        </div>
        <div className="col-xs-4 col-md-7 col-lg-7 paddingTop6">
          <div className="btn-group pull-right" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-default" aria-label="Left Align" onClick={reduceQuantity}>
              <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-secondary border">{myProduct.count}</button>
            <button type="button" className="btn btn-default" aria-label="Left Align" onClick={addQuantity}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className="col-xs-2 col-md-2 col-lg-2 paddingTop7 text-center">
          {product.isOnSale
            ? (<p><strong>Price: {product.discountedPrice}</strong></p>)
            : (<p><strong>Price: {product.originalPrice}</strong></p>)
          }
        </div>
      </div>
      <hr className="hrStyle" />
    </div>
  );
}
export default CartItem;
