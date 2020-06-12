import React from 'react';
import MainAnimation from '../Components/MainAnimation';

const Home = () => {
    return (
        <div className="p-3">
            <MainAnimation>
                <h1 className="font-bold">
                    <span role="img" aria-label="Waving Hand">👋🏽 </span>
                    Hey there,
                    </h1>
                <h1>It's nice to meet you.</h1>

                <p className="my-8">
                    I'm currently a Computer Engineering student at Epita,
                    passionate about clean code.
                </p>
            </MainAnimation>
        </div>
    )
}

export default Home;