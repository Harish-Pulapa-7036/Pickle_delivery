import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import './App.css';
import Login from "./pages/Login";
import PickleList from "./pages/PickleList";
import CartList from "./pages/CartList";
import PrivateRoute from "./PrivateRoute";
import OrdersList from "./pages/OrderList";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
    const navigate=useNavigate();
        const [showLoader,setShowLoader]=useState(false);
        const [cartItems,setCartItems] =useState([])
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            navigate('/')
        }else navigate('/login')
    },[])
    const onAddToCart=async(productName,pricePerKg)=>{
        setShowLoader(true)
        let body={
            productName:productName,
    pricePerKg:pricePerKg,
    weight:"1kg",
    quantity:1
        }
        let url='https://pickle-backend-2xil.onrender.com/api/v1/pickle/update-cart'
        try{
            let response=await axios.post(url,body,{
                headers: {
                    token: sessionStorage.getItem('token')   // <- Add the token in headers
                }
            })
            console.log(response);
            setCartItems(response.data.cart.products)
            setShowLoader(false)
            
        }catch(error){
            setShowLoader(false)
            alert(error.response?.data?.message || 'failed to add to cart, please try again.');
 
        }
    }
    return (
        <div className="app-container" style={{
            // backgroundImage: "url('/images/background_pickle.jpg')"
        }}>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<PrivateRoute><PickleList onAddToCart={onAddToCart}/></PrivateRoute>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/picklelist" element={<PrivateRoute><PickleList onAddToCart={onAddToCart}/></PrivateRoute>} />
                    <Route path="/cart" element={<PrivateRoute><CartList cartItems={cartItems}/></PrivateRoute>} />
                    <Route path="/orders" element={<PrivateRoute><OrdersList /></PrivateRoute>} />

                </Routes>
            </main>
            <Footer />
                    <Loader showLoader={showLoader}/>
            
        </div>
    );
}

export default App;
