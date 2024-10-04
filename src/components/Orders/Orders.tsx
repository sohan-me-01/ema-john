import React, { useEffect, useState } from 'react';
import "./Orders.css"
import Product from '../Product/Product';

const Orders = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] =  useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddCart = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    console.log(cart)
    return (
        <div className='order-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product = {product} 
                        key={product.id}
                        handleAddCart = {()=> handleAddCart(product.name)}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Items : {cart.length}</p>
                {

                }
            </div>
        </div>
    );
};

export default Orders;