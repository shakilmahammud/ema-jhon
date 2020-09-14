import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link, useHistory } from 'react-router-dom';
import happy from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);
    const[placeOrder,setPlaceOrder]=useState(false);
    const history=useHistory()
    const handleProceedCheckout=()=>{
        history.push('/shipment')
    }
    const handleRemoveProduct=(product)=>{
        const newcart=cart.filter(pd=> pd.key !== product);
        setCart(newcart);
        removeFromDatabaseCart(product);
    }

    useEffect(()=>{
        const saveCart=getDatabaseCart();
        const productKeys= Object.keys(saveCart);
        const productCount=productKeys.map(key =>{
        const product= fakeData.find(pd=>pd.key===key);
        product.quantity=saveCart[key];
        console.log()
        return product;
        })
         setCart(productCount);
    },[])

let thankyou;
let again;
if(placeOrder){
    thankyou=<img src={happy} alt=""/> 
    again='Happy Order'
}
    return (
        <div className="twin-container">
        <div className="product-container">
        {
                cart.map(pd=><ReviewItem product={pd} key={pd.key}
                    removeProduct={handleRemoveProduct}
                
                ></ReviewItem>)
            }
            <h2>{again}</h2>
        <p>{thankyou}</p>
        </div>
        <div className="cart-container">
            <Cart cart={cart} >
            <Link className="main-btn review" onClick={handleProceedCheckout}>Proceed Checkout</Link>
            </Cart>
        </div>
        </div>
    );
};

export default Review;