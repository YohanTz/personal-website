import React from 'react';
import Logo from '../../src/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-11/12 mt-8 mb-5 m-auto flex justify-between items-center">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img className="img mr-8" alt="Yohan Tancrez logo" src={Logo} style={{ height: '3em' }} />
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