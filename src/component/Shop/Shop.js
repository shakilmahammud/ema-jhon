import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products]=useState(first10);
    const [cart,setCart]=useState([]);
 useEffect(()=>{
     const saveCart=getDatabaseCart();
     const productkeys=Object.keys(saveCart);
     const previouseCart=productkeys.map(pd=>{
    const productItem=fakeData.find(pdkey=>pdkey.key===pd);
    productItem.quantity=saveCart[pd];
      return productItem;
     })
     setCart(previouseCart);
 },[])




    const handelClick=(product)=>{
        const sameProduct=cart.find(pd=>pd.key===product.key);
        let count=1;
        let newCart;
        if(sameProduct){
            count=sameProduct.quantity +1;
            sameProduct.quantity=count;
            const others =cart.filter(pd=>pd.key !==product.key);
            newCart=[...others,sameProduct];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product]
        }
        setCart(newCart);
        
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
            <ul>
        {
            products.map(product=><Product product={product} showAddToCart={true} handleAddProduct={handelClick}
                key={product.key}
            ></Product>)
        }
    </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}> 
                <Link className="review" to="/order-review">Review order</Link>
                </Cart>
    
            </div>
            
   
        </div>
    );
};

export default Shop;