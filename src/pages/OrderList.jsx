import React, { useState } from 'react';
import { Card, CardContent, Typography, Collapse, IconButton, List, ListItem, ListItemText, Divider, Box, Container, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const OrderCard = ({ order }) => {
    const [expanded, setExpanded] = useState(false);

    const total = order.items.reduce((sum, item) => sum + item.price, 0);

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                    🛒 Order #{order.id} - {order.status}
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" fontWeight="bold">
                        Items Summary
                    </Typography>
                    <IconButton onClick={() => setExpanded(!expanded)}>
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>

                <Collapse in={expanded}>
                    <List>
                        {order.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem>
                                    <ListItemText primary={item.name} />
                                    <Typography variant="body2" fontWeight="bold">₹{item.price}</Typography>
                                </ListItem>
                                {index < order.items.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Collapse>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" textAlign="right">
                    Total: <strong>₹{total}</strong>
                </Typography>
            </CardContent>
        </Card>
    );
};

const OrdersList = () => {
    const orders = [
        {
            id: 1,
            status: "Processing",
            items: [
                { name: "Item A", price: 100 },
                { name: "Item B", price: 200 },
            ],
        },
        {
            id: 2,
            status: "Shipped",
            items: [
                { name: "Item C", price: 150 },
                { name: "Item D", price: 250 },
                { name: "Item E", price: 300 },
            ],
        },
        {
            id: 2,
            status: "Shipped",
            items: [
                { name: "Item C", price: 150 },
                { name: "Item D", price: 250 },
                { name: "Item E", price: 300 },
            ],
        },{
            id: 2,
            status: "Shipped",
            items: [
                { name: "Item C", price: 150 },
                { name: "Item D", price: 250 },
                { name: "Item E", price: 300 },
            ],
        },{
            id: 2,
            status: "Shipped",
            items: [
                { name: "Item C", price: 150 },
                { name: "Item D", price: 250 },
                { name: "Item E", price: 300 },
            ],
        },
    ];
    
    return (
        <Container>
            <Typography variant="h5" fontWeight="bold" mt={4} mb={2}>
                My Orders
            </Typography>
            <Grid container spacing={2} sx={{maxHeight:"70vh"}} className='invisibleScroller'>
                {orders.map(order => (
                    <Grid item xs={12} sm={6} md={4} key={order.id}>
                        <OrderCard order={order} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default OrdersList;
