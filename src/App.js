import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inventory from './component/Inventory/Inventory';
import Review from './component/Review/Review';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
     <Header></Header>
     <Router>
       <Switch>
       <Route path="/shop">
       <Shop></Shop>
       </Route>
       <Route path="/inventory">
       <Inventory></Inventory>
       </Route>
       <Route path="/order-review">
       <Review></Review>
       </Route>
       <Route path="/product/:productKey">
       <ProductDetails></ProductDetails>
       </Route>
       <Route exact path="/">
       <Shop></Shop>
       </Route>
       <Route path="*">
       <NotFound></NotFound>
       </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
