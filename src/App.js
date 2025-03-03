import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
    return (
        <Router>
            <div className="app-container" style={{
                backgroundImage: "url('/images/background_pickle.jpg')"
            }}>
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/picklelist" element={<PickleList />} />
                        <Route path="/cart" element={<CartList />} />


                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
