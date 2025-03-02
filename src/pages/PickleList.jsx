import React, { useState } from 'react';
import './PickleList.css';  // Importing the external CSS
import { Box, Tab, Tabs } from '@mui/material';

const PickleCard = ({ image, name, price, onAddToCart }) => (
    <div className="pickle-card">
        <img src={image} alt={name} className="pickle-image" />
        <h3 className="pickle-name">{name}</h3>
        <p className="pickle-price">₹{price}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
    </div>
);
// const pickles = [
//     { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
//     { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
//     { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
//     { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
//     { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
//     { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
//     { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
//     { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
//     { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
//     { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
//     { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
//     { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },   
//      { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
//     { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
//     { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
//     { image: '/images/mango-pickle.jpg', name: 'Mixed Pickle', price: 200 },
// ];
const vegPickles = [
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },   { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
];

const nonVegPickles = [
    { image: '/images/chicken-pickle.jpg', name: 'Chicken Pickle', price: 250 },
    { image: '/images/prawn-pickle.jpg', name: 'Prawn Pickle', price: 300 },
    { image: '/images/fish-pickle.jpg', name: 'Fish Pickle', price: 280 },
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },   { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
];

const PickleList = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    const pickles = tabIndex === 0 ? vegPickles : nonVegPickles;

    return (
        <Box className="pickle-tabs-container" sx={{width:"100%"}}> 
            <Tabs value={tabIndex} onChange={handleTabChange} centered     sx={{
        '& .MuiTab-root': {
            color: 'white',              // Inactive Tab color
            textTransform: 'none',       // Optional: to prevent uppercase
        },
        '& .Mui-selected': {
            color: 'white',              // Active Tab color
            fontWeight: 'bold',          // Optional: make selected bold
        },
        margin:"20px"
        // backgroundColor: '#28a745',      // Background color for the tab bar
    }}
>
                <Tab label="Veg Pickles" />
                <Tab label="Non-Veg Pickles" />
            </Tabs> 
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
        </Box>
    );
};

export default PickleList;
