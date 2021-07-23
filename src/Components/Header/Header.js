import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </div>
    );
};

export default Header;