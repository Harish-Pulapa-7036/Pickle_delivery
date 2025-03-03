import React, { useState } from 'react';
import './PickleList.css';  // Importing the external CSS
import { Box, Button, Tab, Tabs } from '@mui/material';

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
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 }, { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 },
];

const nonVegPickles = [
    { image: '/images/chicken-pickle.jpg', name: 'Chicken Pickle', price: 250 },
    { image: '/images/prawn-pickle.jpg', name: 'Prawn Pickle', price: 300 },
    { image: '/images/fish-pickle.jpg', name: 'Fish Pickle', price: 280 },
    { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
    { image: '/images/mango-pickle.jpg', name: 'Lemon Pickle', price: 120 },
    { image: '/images/mango-pickle.jpg', name: 'Garlic Pickle', price: 180 }, { image: '/images/mango-pickle.jpg', name: 'Mango Pickle', price: 150 },
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
        <Box className="pickle-tabs-container " sx={{ width: "100%" ,position:"relative"}} >
            <Tabs value={tabIndex} onChange={handleTabChange} centered 
            // sx={{
            //     '& .MuiTab-root': {
            //         color: 'white',              // Inactive Tab color
            //         textTransform: 'none', 
            //         // background:"#121826",
            //         margin: "1rem 0", 
            //     },
            //     '& .Mui-selected': {
            //         color: 'white',              // Active Tab color
            //         fontWeight: 'bold', 
            //                 // Optional: make selected bold
            //     },
            //         borderRadius:" 0.5rem",
            //         margin: "20px",
            //     background:"#121826",      // Background color for the tab bar
            // }}
            sx={{
        height: "60px",  // Set height for the entire tabs bar
        minHeight: "60px", // Ensures it doesn't shrink
        background: "#121826",  // Background color for tab bar
        borderRadius: "0.5rem",
        margin: "20px",
        marginTop:"40px",
        '& .MuiTab-root': {
            color: 'white',
            textTransform: 'none',
            margin: "0.5rem 1rem",
            minHeight: "50px",  // Set height for each tab
            height: "50px",    // Ensures each tab button keeps this height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        '& .Mui-selected': {
            color: 'white',
            fontWeight: 'bold',
        }
    }}
            >
                <Tab label="Veg Pickles" />
                <Tab label="Non-Veg Pickles" />
            </Tabs>
            <div className="pickle-list-container invisibleScroller" style={{maxHeight:"70vh",marginBottom:"3rem"}}>
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
            <Button 
                            // color="primary" 
                            // onClick={handleLoginClick} 
                            className='checkout-btn'
                            sx={{
                                textTransform: 'none',
                                position: "absolute",
                                fontWeight: 'bold',
                                width:"60%",
                                backgroundColor: "#0056b3",
                                color: "white",
                                left: "50%",
                                top:"-1%",
                                transform: "translateX(-50%)",  // Center the button horizontally
                                '&:hover': {
                                    backgroundColor: "#0056b3",  // Keep white on hover
                                    color: "white"             // Optional - keep text color
                                }
                            }}
                               
                        >
                            Checkout
                        </Button>
        </Box>
    );
};

export default PickleList;
