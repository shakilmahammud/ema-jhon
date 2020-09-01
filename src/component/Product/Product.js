import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name,img,price,stock,seller,key}=props.product;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""/>
           </div>
           <div>
           <h3 className="product-name"> <Link to={"/product/"+key}> {name}</Link></h3>
           <br/>
        <p><small> by {seller} </small></p>
        <p>${price}</p>
        <p>only {stock} left in  stock - order soon </p>
       {props.showAddToCart &&
        <button 
        className="main-btn" onClick={()=>props.handleAddProduct(props.product)}
        >
            <FontAwesomeIcon icon={faShoppingCart}/>  add cart</button>}
           </div>
    
        </div>
    );
};

export default Product;