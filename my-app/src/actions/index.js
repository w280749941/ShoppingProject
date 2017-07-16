export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
export const receivedData = products => {
  return {
    type: 'GET_DATA',
    products
  }
}
