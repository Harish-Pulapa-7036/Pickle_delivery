import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({cartCount}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();
    const token =sessionStorage.getItem("token")
    // Close menu if user clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <header className="header">
            <h1>Padmaja Pickles</h1>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav ref={menuRef} className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                 {   token ? 
                 <li><Link to="/login" onClick={() => {setMenuOpen(false);sessionStorage.removeItem('token')}}>LogOut</Link></li>
                  : 
                  <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>}
                    <li><Link to="/orders" onClick={() => setMenuOpen(false)}>Your Orders</Link></li>
                
                    <li>  <Link to="/cart" className="cart-icon" onClick={() => {setMenuOpen(false)}}>
                    <ShoppingCartIcon />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link></li>
                </ul>
            </nav>
          
        </header>
    );
};

export default Header;
