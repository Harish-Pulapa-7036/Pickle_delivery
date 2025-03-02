import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate =useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/picklelist');  // Navigate to login page

        console.log('Form Data:', formData);
        // Add your form submission logic here
    };
    const handleSignup = () => {
        navigate('/signup');  // Navigate to login page
    };
    return (
        <Container component="main" maxWidth="xs">
            <Paper
                elevation={6}
                sx={{
                    mt: 8,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom>
                    Sign In
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoFocus
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: '12px' } }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            p: 1.5,
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            textTransform: 'none'
                        }}
                    >
                        Sign In
                    </Button>
                </Box>

                <Typography variant="body2" color="text.secondary">
                    Don’t have an account?
                    <a href="#"
                        onClick={handleSignup}

                        style={{ color: '#1976d2', textDecoration: 'none' }}
                    >Sign Up
                    </a>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Login;
