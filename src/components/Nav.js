import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>SnakeGame</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                <li>Home</li>
                </Link>
                <Link style={navStyle} to="/game">
                <li>Play</li>
                </Link>
                <Link style={navStyle} to="/about">
                <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;