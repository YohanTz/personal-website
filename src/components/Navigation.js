import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex">
            <Link
                to="/"
                className="text-black no-underline m-5"
            >
                About
            </Link>

            <Link
                to="/resume"
                className="text-black no-underline m-5"
            >
                Resume
            </Link>
        </nav>
    )
}

export default Navigation;