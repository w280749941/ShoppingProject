import * as ProductActionTypes from '../actiontypes/product';

const initialState = (function(){
  fetch('http://localhost:8080/products')
    .then(response => {
      return response.json();
    });
}());

export default function Product(state=initialState, action) {
  switch(action.type) {
    case ProductActionTypes.ADDPRODUCT_TOCART: {

    }
    default:
      return state;
  }
}
