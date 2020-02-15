import React from 'react';
import { Route, Switch , Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Post from './pages/Post';
import Error from './pages/Error';
import Posts from './pages/Posts';
import Header from './components/commons/Header';

function App() {
  return (
    <>    
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} exact />
      <Route path="/products/:id" component={ProductInfo} exact />  
      <Route path="/posts" component={Posts} exact /> 
      <Route path="/posts/:id" component={Post} exact />  
      <Route component={Error}/>
    </Switch>  
    </>
  );
}

export default App;
