import React from 'react';
import MainAnimation from '../Components/MainAnimation';
import Header from './../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section className="home flex flex-col justify-between" >
            <Header />
            <MainAnimation className="self-center flex flex-col align-stretch sm:items-center">
                <h1>Hi !</h1>
                <h2>My name is <span>Yohan Tancrez</span></h2>
                <h3>I'm a computer engineering student <span>@Epita</span></h3>
            </MainAnimation>
            <FontAwesomeIcon className="self-center text-3xl icons mb-5" icon={faChevronDown} />
        </section>
    )
}

export default Home;