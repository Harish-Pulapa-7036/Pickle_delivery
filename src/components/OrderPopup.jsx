import React, { useState, useEffect } from 'react';
import './OrderPopup.css'; // Add styles here

const OrderPopup = ({
    orderPlaced,
    setOrderPlaced
}) => {

   

    return (
        <div>

            {/* Popup */}
            {orderPlaced && (
                <div className="order-popup">
                    <div className="popup-content">
                    <div className="tick-mark">✔</div>
                        <h3>Order Placed Successfully!</h3>
                        <p>Thank you for your order. We will notify you when it's ready.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderPopup;
