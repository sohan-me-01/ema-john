import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {

    let total = 0;
    let totalShapping = 0;
    for(const order of cart) {
        total = total + order.price;
        totalShapping = totalShapping + order.shipping;
    }

    let tax = total * 7 / 100;
    // console.log(tax)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShapping}</p>
            {/* <input type="text" /> % */}
            <p title='7% tax'>Tax: ${tax}</p>
            <h6>Grand Total: ${total + totalShapping + tax}</h6>
        </div>
    );
};

export default Cart;