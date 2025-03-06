import React, { useEffect } from "react";
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

function App() {
    const navigate=useNavigate()
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            navigate('/')
        }else navigate('/login')
    },[])

    return (
        <div className="app-container" style={{
            // backgroundImage: "url('/images/background_pickle.jpg')"
        }}>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<PrivateRoute><PickleList /></PrivateRoute>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/picklelist" element={<PrivateRoute><PickleList /></PrivateRoute>} />
                    <Route path="/cart" element={<PrivateRoute><CartList /></PrivateRoute>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
