import { Button, Card, CardActions, CardContent, CardMedia, IconButton, ToggleButton, Typography, ToggleButtonGroup } from "@mui/material";
import "./CartList.css"
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import OrderPopup from "../components/OrderPopup";
const CartItem = ({item}) => {
    const [selectedWeight, setSelectedWeight] = useState('250gms');
    const [quantity, setQuantity] = useState(1);

    const handleWeightChange = (event, newWeight) => {
        if (newWeight !== null) {
            setSelectedWeight(newWeight);
        }
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
    // productName:productName,
    // pricePerKg:pricePerKg,
    // weight:"1000g",
    // quantity:1
    return <>
    <Card sx={{ border: "3px solid white", fontFamily: 'Poppins, sans-serif',borderRadius:"20px" }}>
        <CardContent style={{ display: "flex",
                    marginLeft:"8px"

         }}>
            <CardMedia
                sx={{ width: "100px", height: "80px" }}
                image="/images/mango-pickle.jpg"
                title="Mango Pickle"
            />
            <CardContent sx={{ fontFamily: 'Poppins, sans-serif' }}>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {item.productName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                {item.pricePerKg}
                </Typography>
            </CardContent>
        </CardContent>
        <CardContent>
            <Typography
                style={{
                    display: "inline-flex",
                    alignItems: 'center',
                    backgroundColor: "#e9e3e3",
                    alignSelf: "flex-start",
                    fontFamily: 'Poppins, sans-serif',
                    marginLeft:"8px"
                }}
            >
                <Button size="small" onClick={decrementQuantity}>-</Button>
                <Typography sx={{ fontWeight: 500 }}>{item.quantity}</Typography>
                <Button size="small" onClick={incrementQuantity}>+</Button>
            </Typography>
            <CardActions>
                {/* Weight Options */}
                    <ToggleButtonGroup
                        value={item.weight}
                        exclusive
                        onChange={handleWeightChange}
                        aria-label="weight selection"
                        size="small"
                        sx={{ fontFamily: 'Poppins, sans-serif',paddingLeft:"0px" }}
                    >
                        <ToggleButton value="250gms">250gms</ToggleButton>
                        <ToggleButton value="500gms">500gms</ToggleButton>
                        <ToggleButton value="750gms">750gms</ToggleButton>
                        <ToggleButton value="1kg">1kg</ToggleButton>
                    </ToggleButtonGroup>

                {/* Delete Button */}
                <div>
                    <IconButton size="small" color="error">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </CardActions>
        </CardContent>
    </Card>
</>

}
const CartList = ({cartItems}) => {
     // Function to handle order placement
     const [orderPlaced, setOrderPlaced] = useState(false);
     const placeOrder = () => {
        setOrderPlaced(true);

        // // Play order placed sound
        const audio = new Audio('/sounds/order-sound.wav'); // Place file in public/sounds folder
        audio.play();

        // Automatically close popup after 3 seconds
        setTimeout(() => setOrderPlaced(false), 3000);
    };
    return (
        <>
        <div style={{ maxHeight: "70vh",paddingBottom:"20px" }} className="cartList-container invisibleScroller">
            
            {
                cartItems.map((item)=> <CartItem item={item}/>)
            }
           

        </div>
          {/* Sticky Total Bar */}
          <div className="cartTotalBar">
            <div style={{display:"flex",justifyContent :"space-around",gap:"15px"}}>

                <Typography variant="h7" sx={{ color: 'white' }}>
                    Total
                </Typography>
                <Typography variant="h7" sx={{ color: 'white' }}>
                    Rs 100.00
                </Typography>
            </div>

            <Button size="large" 
             sx={{background:'green',color:"white", '&:hover': {
                        backgroundColor: "#0056b3",  // Keep white on hover
                        color: "white"             // Optional - keep text color
                    }}}
                    onClick={placeOrder}
                    >
                        place order
                        </Button>

            </div>
            <OrderPopup setOrderPlaced={setOrderPlaced} orderPlaced={orderPlaced}/>
        </>
    )
}
export default CartList;
