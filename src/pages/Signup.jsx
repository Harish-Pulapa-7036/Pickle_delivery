import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    TextField, 
    Button, 
    Container, 
    Paper, 
    Typography, 
    Box, 
    Avatar, 
    InputAdornment,
    IconButton
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from 'axios';
import Loader from "../components/Loader";

// https://pickle-backend-2xil.onrender.com
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    const [phoneError,setPhoneError]=useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader,setShowLoader]=useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "phoneNumber") {
            // Allow only digits
            const numericValue = value.replace(/[^0-9]/g, "");  // Remove anything that's not a digit
    
            setFormData({ ...formData, [name]: numericValue });
    
            // Validation for 10 digits
            if (numericValue.length === 10) {
                setPhoneError(""); // No error if exactly 10 digits
            } else {
                setPhoneError("Phone number should be 10 digits");
            }
        } else if (name === "confirmPassword") {
    
            setFormData({ ...formData, [name]: value });
    
            if (formData.password === value) {
                setError('');
            } else {
                setError("Passwords do not match");
            }
        } 
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

const handleSignup = async () => {
    setShowLoader(true)
    try {
        const response = await axios.post('https://pickle-backend-2xil.onrender.com/api/v1/signup', {
            name: formData.name,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            confirmPassword:formData.confirmPassword
        });
        setShowLoader(false)

        // Handle success (e.g., show a message, redirect, etc.)
        alert('Signup successful!');
        navigate('/login');  // Navigate to login page
    } catch (error) {
        console.error('Signup failed', error.response?.data || error.message);
        setShowLoader(false)

        // Handle error (e.g., show error message to user)
        alert(error.response?.data?.message || 'Signup failed, please try again.');
    }
};

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(error || phoneError || 
            formData.address.length === 0 || 
            formData.name.length === 0 || 
            formData.password.length === 0 || 
            formData.confirmPassword.length === 0 ||
            formData.phoneNumber.length === 0
        ) return
        else {
            handleSignup()
        }
    };

    const handleLoginClick = () => {
        navigate('/login');  // Navigate to login page
    };

    return (
        <>
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
    type="text"  // Change to text
    value={formData.phoneNumber}
    onChange={handleChange}
    required
    margin="normal"
    inputProps={{
        maxLength: 10,  // Optional, to limit to 10 digits
        inputMode: "numeric",  // Show numeric keyboard on mobile
        pattern: "[0-9]*"  // Helps some browsers restrict input
    }}
    InputProps={{ sx: { borderRadius: '12px' } }}
/>

                    {phoneError && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {phoneError}
                        </Typography>
                    )}
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
            type={showPassword ? "text" : "password"} // This controls the visibility
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
                sx: { borderRadius: '12px' }
            }}
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
        <Loader showLoader={showLoader}/>
        </>

    );
};

export default Signup;
