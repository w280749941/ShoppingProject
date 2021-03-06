import React from 'react';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productApp from './reducers'

let store = createStore(
  productApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const restUrl = 'https://localhost:3032'; 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
//ReactDOM.render(<App />, document.getElementById('root'));
export default store;
