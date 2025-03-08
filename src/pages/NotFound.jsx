import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="white">
        Oops! The page you are looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
