import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex">
            <NavLink
                exact
                to="/"
                className="text-xl text-gray-600 no-underline hover:text-black"
                activeClassName="activeNav"
            >
                {'<About/>'}
            </NavLink>

            <NavLink
                to="/resume"
                className="text-xl text-gray-600 no-underline ml-16 hover:text-black"
                activeClassName="activeNav"
            >
                {'<Resume/>'}
            </NavLink>
        </nav>
    )
}

export default Navigation;