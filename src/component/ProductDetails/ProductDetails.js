import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
            <h2>Your Product Details</h2>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetails;