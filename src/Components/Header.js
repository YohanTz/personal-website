import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSlider from './DarkModeSlider';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className="header flex justify-between ">
            <div className="flex flex-wrap justify-between items-center">
                <Link to="/">
                    <svg className="logo mr-5" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.4 180" style={{ height: '3em'}}>
                        <path d="M138.1,40v6h-47V180h-6V46h-47V40Z" transform="translate(-38.1 -40)" />
                        <path d="M140.1,64h77.4l-47,111v45h-6V175l-47-111h6.4l43.6,102.6,41-96.6H140.1Z" transform="translate(-38.1 -40)" />
                    </svg>
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