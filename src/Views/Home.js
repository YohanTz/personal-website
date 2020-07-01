import React from 'react';
import MainAnimation from '../Components/MainAnimation';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section className="view flex flex-col justify-between" >
            <Header />
            <MainAnimation className="self-center flex flex-col align-stretch sm:items-center">
                <h1>Hi !</h1>
                <h2>My name is <span>Yohan Tancrez</span></h2>
                <h3>
                    I'm a computer engineering student
                    <a
                        href="https://www.epita.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span> @Epita</span>
                    </a>
                </h3>
            </MainAnimation>
            <div className="self-center flex flex-col items-center">
                Scroll Down!
                <FontAwesomeIcon className="text-xl icons mb-5" icon={faChevronDown} />
            </div>
        </section>
    )
}

export default Home;