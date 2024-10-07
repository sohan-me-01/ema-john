import React, { useEffect, useState } from 'react';
import "./Orders.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
    return (
        <div className='order-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product = {product} 
                        key={product.id}
                        handleAddCart = {()=> handleAddCart(product)}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;