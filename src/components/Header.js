import React from 'react';
import Logo from '../../src/logo.png';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="pt-10 p-5 flex justify-between items-center">
            <div className="flex justify-between items-center">
                <img className="img m-5" alt="Yohan tancrez logo" src={Logo} style={{ height: '3em'}} />
                <h3 >
                    Tancrez Yohan
                </h3>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;