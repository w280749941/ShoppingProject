import * as ProductActionTypes from '../actiontypes/product';

export const addToCart = product => {
  return {
    type: ProductActionTypes.ADDPRODUCT_TOCART,
    product
  };
};
