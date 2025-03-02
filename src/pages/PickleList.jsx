import React from 'react';
import './PickleList.css';  // Importing the external CSS

const PickleCard = ({ image, name, price, onAddToCart }) => (
    <div className="pickle-card">
        <img src={image} alt={name} className="pickle-image" />
        <h3 className="pickle-name">{name}</h3>
        <p className="pickle-price">₹{price}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
    </div>
);
const pickles = [
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
    { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
    { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
    { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
     { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
    { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },
];


const PickleList = () => {
    return (
        <div className="pickle-list-container">
            {pickles.map((pickle, index) => (
                <PickleCard
                    key={index}
                    image={pickle.image}
                    name={pickle.name}
                    price={pickle.price}
                    onAddToCart={() => console.log(`${pickle.name} added to cart`)}
                />
            ))}
        </div>
    );
};

export default PickleList;
