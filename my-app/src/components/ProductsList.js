import React from 'react';
import Thumbnail from './Thumbnail';
import FilterHeader from './FilterHeader';

const ProductsList = ({products}) => {
  
  return(
    <div className="container">
      <FilterHeader />
      <div className="row">
        {products.map((product, index) => {
          return (
            <Thumbnail
              key={product._id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  )
}
export default ProductsList
