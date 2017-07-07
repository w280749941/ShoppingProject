import React from 'react';
import CartItem from './CartItem';
import TotalSection from './TotalSection';

// Need to finish up Cart page.
const Cart = () => {
  let output = [];
  let total = 0;
  // Append same product to the existing object, update the counter of the product.
  for (let key in localStorage) {
    let flag;
    // This only apply JSON.parse to JSON string: item0, item1 ...
    if(typeof(localStorage[key]) === "string") {
      if(!JSON.parse(localStorage[key]).hasOwnProperty('_id')) {
        continue;
      } else {
        /* Loop through the output array and append new item when
           there isn't one exist in output. Otherwise update the count
        */
        const storageProduct = JSON.parse(localStorage[key]);
        for (let j=0; j<output.length; j++) {
          if(output[j].product._id === storageProduct._id) {
            flag = j;
            break;
          }
        }
        if (flag !== undefined) {
          output[flag].count += 1;
        } else {
          output.push({
            product: storageProduct,
            count: 1
          });
        }
        if(storageProduct.isOnSale) {
          total += storageProduct.discountedPrice;
        } else {
          total += storageProduct.originalPrice;
        }
      }
    }
  }
  // {product} contains {product: Object, count: #}
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
      {total ? (<TotalSection total={total} />)
             : (<h1 className="text-center">Your Cart is Empty</h1>)}

    </div>
  );
}
export default Cart;
