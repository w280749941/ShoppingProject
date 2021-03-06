import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// App Components
import Header from './Header';
//import Body from './Body';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import HotProducts from './HotProducts';
import Cart from './Cart';
import Sales from './Sales';
import FindProduct from './FindProduct';
import Admin from './Admin';
import Homepage from './Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path ="/newarrivals" component={NewArrivals} />
          <Route path ="/hotproducts" component={HotProducts} />
          <Route path ="/onsale" component={Sales} />
          <Route path ="/cart" component={Cart} />
          <Route path ="/find/:productName" component={FindProduct} />
          <Route path ="/admin" component={Admin} />
        </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
