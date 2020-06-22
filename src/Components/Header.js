import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header flex justify-between items-center">
            <div className="flex flex-wrap justify-between items-center">
                <Link to="/">
                    <img className="mr-8" alt="Yohan Tancrez logo" src={Logo} style={{ height: '3em' }} />
                </Link>
            </div>
        </header>
    )
}

export default Header;