import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link >
            <Link to='/generator'>Generator</Link>
        </nav>
    );
};

export default Header;