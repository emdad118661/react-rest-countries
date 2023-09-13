import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>Welcome to my react app</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;