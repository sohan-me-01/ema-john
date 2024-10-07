import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddCart = props.handleAddCart;

  

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-manufacturer'> Manufacturer : {seller}</p>
                <p className='product-rating'>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart' onClick={()=> handleAddCart(handleAddCart)}>
                Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;