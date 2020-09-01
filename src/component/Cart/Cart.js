import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,prd)=>total+prd.price*prd.quantity,0);
    const productPrice=(total).toFixed(2);
    const tax=(total/10).toFixed(2);
    let shipping=0;
    if(total>34){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99
    }
 const totalPrice=(total+shipping+Number(tax)).toFixed(2)
    return (
        <div >
            <h2>Order Summery</h2>
       <p>Items Summery : <span>$</span> {cart.length}</p>
       <p>Product price : <span>$</span> {productPrice}</p>
       <p>Shipping price : <span>$</span> {shipping}</p>
       <p>Tax + VAT :<span>$</span>  {tax}</p>
       <h6> </h6>
    <h3>Total Price : <span>$</span> {totalPrice}</h3>
    {
        props.children
    }
        </div>
    );
};

export default Cart;