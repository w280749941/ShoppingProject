import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList'

const getVisibleProducts = (products, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return products;
    case 'SHOW_YEEZY':
      return products.filter( p => p.category.toLowerCase().includes('yeezy'));
    case 'SHOW_JORDAN':
      return products.filter( p => p.category.toLowerCase().includes('jordan'));
    default:
      return products;
  }
}

const mapStateToProps = state => {
  return {
    products: getVisibleProducts(state.products, state.visibilityFilter)
  }
}

const VisibleBodyList = connect(
  mapStateToProps,
)(ProductsList)

export default VisibleBodyList
