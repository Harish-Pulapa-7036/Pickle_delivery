import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    TextField, 
    Button, 
    Container, 
    Paper, 
    Typography, 
    Box, 
    Avatar 
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError('');
        console.log("Signup Data:", formData);
        // API call logic can go here
    };

    const handleLoginClick = () => {
        navigate('/login');  // Navigate to login page
    };

    return (
        <Container component="main" maxWidth="xs" style={{maxHeight:"70vh"}} className="invisibleScroller">
            <Paper 
                elevation={6} 
                sx={{ 
                    p: 4, 
                    m: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" fontWeight="bold">
                    Signup
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        type="number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        multiline
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />

                    {error && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ 
                            mt: 3, 
                            mb: 2, 
                            borderRadius: '12px', 
                            textTransform: 'none', 
                            fontWeight: 'bold'
                        }}
                    >
                        Signup
                    </Button>

                    <Typography variant="body2" align="center">
                        Already have an account? 
                        <Button 
                            color="primary" 
                            onClick={handleLoginClick} 
                            sx={{ textTransform: 'none', fontWeight: 'bold' }}
                        >
                            Login
                        </Button>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Signup;
