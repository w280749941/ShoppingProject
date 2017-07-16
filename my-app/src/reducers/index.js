import { combineReducers } from 'redux'
import products from './products'
import visibilityFilter from './visibilityFilter'

const productApp = combineReducers({
  products,
  visibilityFilter
})

export default productApp
