import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
    render(){
        return(        
               <nav className="navbar navbar-expand-lg bg-darkblue">
                    <Link to="/" className="navbar-brand">g<strong>Shop</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>                          
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>  
                            </li>                        
                            <li className="nav-item">
                                <Link to="/products/2" className="nav-link">Product Info</Link>  
                            </li>
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link">Posts</Link>  
                            </li> 
                            <li className="nav-item">
                                <Link to="/posts/1" className="nav-link">Post</Link>  
                            </li>
                        </ul> 
                        <div>
                            <button type="button" className="btn btn-outline-custom"><FontAwesomeIcon icon={faShoppingCart} /> Cart</button>
                        </div>                     
                    </div>
                </nav>
        )
    }
}