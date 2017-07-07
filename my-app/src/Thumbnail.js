import React from 'react';
import './Thumbnail.css';

// Display discountedPrice if on sale
const Thumbnail = props => {
  const product = props.product;
  const addItem = () => {
    if (typeof(Storage) !== undefined) {
      if(!localStorage.itemCount){
        localStorage.itemCount = 0;
      }
      const index = localStorage.itemCount;
      localStorage.setItem('item'+index, JSON.stringify(product));
      localStorage.itemCount = Number(index) + 1;
      alert('Total items: ' + localStorage.itemCount);
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
  }
  return (
    <div>
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={'http://'+product.imageUrl} alt="..." />
          <div className="caption">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {product.isOnSale ? (<p><strong className='rightMargin textColor'>On sale: {product.discountedPrice}</strong><s>Price: {product.originalPrice}</s></p>)
                      : (<p><strong>Price: {product.originalPrice}</strong></p>)}
            <p><button type="button" className="btn btn-primary" onClick={addItem}>Add to cart</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thumbnail;
