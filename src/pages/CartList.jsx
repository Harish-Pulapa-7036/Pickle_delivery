import { Button, Card, CardActions, CardContent, CardMedia, IconButton, ToggleButton, Typography, ToggleButtonGroup } from "@mui/material";
import "./CartList.css"
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = () => {
    const [selectedWeight, setSelectedWeight] = useState('250gms');
    const [quantity, setQuantity] = useState(1);

    const handleWeightChange = (event, newWeight) => {
        if (newWeight !== null) {
            setSelectedWeight(newWeight);
        }
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
    return <>
        <Card sx={{ border: "3px solid white" }}>
            <CardMedia
                sx={{ height: "100px" }}
                image="/images/mango-pickle.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    mango pickle
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    120 Rs/kg
                </Typography>

            </CardContent>
            <Typography style={{ display: "inline-flex", marginLeft: "8px", alignItems: 'center', backgroundColor: "#e9e3e3", alignSelf: "flex-start" }}>
                <Button size="small" onClick={decrementQuantity}>-</Button>
                <Typography>{quantity}</Typography>
                <Button size="small" onClick={incrementQuantity}>+</Button>
            </Typography>
            <CardActions >
                {/* Weight Options */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

                    <ToggleButtonGroup
                        value={selectedWeight}
                        exclusive
                        onChange={handleWeightChange}
                        aria-label="weight selection"
                        size="small"
                    >
                        <ToggleButton value="250gms">250gms</ToggleButton>
                        <ToggleButton value="500gms">500gms</ToggleButton>
                        <ToggleButton value="750gms">750gms</ToggleButton>
                        <ToggleButton value="1kg">1kg</ToggleButton>
                    </ToggleButtonGroup>
                </div>


                {/* Delete Button */}
                <div>

                    <IconButton size="small" color="error">
                        <DeleteIcon />
                    </IconButton>
                </div>
                {/* Quantity Controls */}

            </CardActions>

        </Card>
    </>
}
const CartList = () => {
    return (
        <>
        <div style={{ maxHeight: "70vh",paddingBottom:"20px" }} className="cartList-container invisibleScroller">
            <CartItem />
            <CartItem />
            <CartItem />

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

            <Button size="large"  sx={{background:'green',color:"white", '&:hover': {
                        backgroundColor: "#0056b3",  // Keep white on hover
                        color: "white"             // Optional - keep text color
                    }}}>place order</Button>

            </div>
        </>
    )
}
export default CartList;
