import React from 'react';
import Logo from '../logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="mb-8 m-auto flex sm:justify-between items-center">
            <div className="flex flex-wrap sm:flex-no-wrap justify-between items-center">
                <Link to="/">
                    <img className="mr-8" alt="Yohan Tancrez logo" src={Logo} style={{ height: '3em' }} />
                </Link>
                <h3 className="invisible sm:visible md:visible lg:visible xl:visible">
                    Tancrez Yohan
                </h3>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;