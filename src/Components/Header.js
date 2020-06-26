import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import DarkModeSlider from './DarkModeSlider';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className="header flex justify-between items-center">
            <div className="flex flex-wrap justify-between items-center">
                <Link to="/">
                    <img className="mr-8" alt="Yohan Tancrez logo" src={Logo} style={{ height: '3em' }} />
                </Link>
                <a
                    href="https://www.linkedin.com/in/yohan-tancrez-1302aa163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl p-3 no-underline "
                >
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>

                <a
                    href="mailto:yohan.tancrez@epita.fr"
                    className="text-3xl p-3 no-underline"
                >
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>

                <a
                    href="https://github.com/YohanTz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl p-3 no-underline">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>

                <a
                    href="https://www.twitch.tv/yohantz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl p-3 no-underline"
                >
                    <FontAwesomeIcon className="icon" icon={faTwitch} />
                </a>
            </div>
            <DarkModeSlider />
        </header>
    )
}

export default Header;