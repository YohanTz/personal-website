import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import ScriptTag from 'react-script-tag';

const Header = () => {
    return (
        <header className="header flex justify-between items-center">
            <div className="flex flex-wrap justify-between items-center">
                <Link to="/">
                    <img className="mr-8" alt="Yohan Tancrez logo" src={Logo} style={{ height: '3em' }} />
                </Link>
            </div>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
                <em>Enable Dark Mode!</em>
                <ScriptTag type="text/javascript" src="/Darkmode.js"></ScriptTag>
            </div>
        </header>
    )
}

export default Header;