import React from 'react';
import CartItem from './CartItem';

// Need to finish up Cart page.
const Cart = () => {
  let output = [];
  // Append same product to the existing object, update the counter of the product.
  for (let key in localStorage) {
    let flag;
    if(typeof(localStorage[key]) === "string") {
      if(!JSON.parse(localStorage[key]).hasOwnProperty('_id')) {
        continue;
      } else {
        for (let j=0; j<output.length; j++) {
          if(output[j].product._id === JSON.parse(localStorage[key])._id) {
            flag = j;
            break;
          }
        }
        if (flag !== undefined) {
          output[flag].count += 1;
        } else {
          output.push({
            product: JSON.parse(localStorage[key]),
            count: 1
          });
        }
      }
    }

  }/*
  for (let i=0; i<Number(localStorage.itemCount); i++) {
    let flag;
    for (let j=0; j<output.length; j++) {
      if(output[j].product._id === JSON.parse(localStorage.getItem('item'+ i.toString()))._id) {
        flag = j;
      }
    }
    if (flag !== undefined) {
      output[flag].count += 1;
    } else {
      output.push({
        product: JSON.parse(localStorage.getItem('item'+ i.toString())),
        count: 1
      });
    }
  }*/
  return (
    <div className="container">
      {output.map(function(product, index) {
        return (
          <CartItem
            key={index}
            products={product}
          />
        );
      })}
    </div>
  );
}
export default Cart;
