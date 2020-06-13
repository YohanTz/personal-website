import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex">
            <NavLink
                exact
                to="/"
                className="text-black no-underline m-5 hover:text-black"
                activeClassName="font-bold"
            >
                About
            </NavLink>

            <NavLink
                to="/resume"
                className="text-black no-underline m-5 hover:text-black"
                activeClassName="font-bold"
            >
                Resume
            </NavLink>
        </nav>
    )
}

export default Navigation;