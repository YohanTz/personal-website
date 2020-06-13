import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="text-right mb-8 p-3 absolute bottom-0 w-full">
            <a href="https://www.linkedin.com/in/yohan-tancrez-1302aa163" className="text-3xl p-3 text-black no-underline">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:yohan.tancrez@epita.fr" className="text-3xl p-3 text-black no-underline">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/YohanTz" className="text-3xl p-3 text-black no-underline">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    )
}

export default Footer;