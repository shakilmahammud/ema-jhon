import React from 'react';


const ReviewItem = (props) => {
    const {name,quantity,img,key,price}=props.product;
    return (
        <div>
            <div>
            <h1>ReviewItem</h1>
            <img src={img} alt=""/>
           <h2>{name}</h2>
           <p>Quantity :{quantity}</p>
    <p><small>${price}</small></p>
           <button className="main-btn"
           onClick={()=>props.removeProduct(key)}
           >Remove</button>
            </div> 
        </div>
    );
};

export default ReviewItem;