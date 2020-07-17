import React from 'react';
import MainAnimation from '../Components/MainAnimation';
import Header from '../Components/Header';

const Home = () => {
    return (
        <section className="view flex flex-col justify-between" >
            <Header />
            <MainAnimation className="self-center flex flex-col align-stretch sm:items-center">
                <h1>Hi !</h1>
                <h2>My name is <span>Yohan Tancrez</span></h2>
                <h3>
                    Computer engineering student
                    <a
                        href="https://www.epita.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span> @Epita</span>
                    </a>
                </h3>
            </MainAnimation>
            <div className="mb-5 relative self-center flex flex-col items-center">
                <div className="mouse"></div>
            </div>
        </section>
    )
}

export default Home;