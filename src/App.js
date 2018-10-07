import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/layout/header'
import Navbar from './components/layout/Navbar'
import ProductList from './components/myproducts/ProductList'
import Product from './components/myproducts/Product'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatProduct from './components/myproducts/createProduct'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div className="App">     
     <div className="centerize">
     <Header/>
     <div className="switch">
     <div className="forScroll">
     <Switch>
       <Route exact path="/" component={Navbar}/> 
       <Route  path="/myproducts" component={ProductList}/> 
       <Route  path="/myproducts/product/:id" component={Product}/> 
       <Route  path="/signin" component={SignIn}/> 
       <Route  path="/signup" component={SignUp}/> 
       <Route  path="/create_product" component={CreatProduct}/> 

     </Switch>
     </div>
     </div>
     </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
