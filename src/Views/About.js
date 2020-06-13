import React from 'react';
import MainAnimation from '../Components/MainAnimation';

const Home = () => {
    return (
        <MainAnimation>
            <div className="mb-20 flex">
                <div className="px-6">
                    <h1 className="font-bold">
                        <span role="img" aria-label="Waving Hand">👋🏽</span>
                    </h1>
                </div>
                <div className="">
                    <h1 className="font-bold">
                        Hey there,
                    </h1>
                    <h1>
                        It's nice to meet you.
                    </h1>
                </div>
            </div>
            <div className="w-1/2">
                <p className="my-8 text-2xl">
                    I'm currently a Computer Engineering student at Epita,
                    passionate about clean code.
                </p>
            </div>

        </MainAnimation>
    )
}

export default Home;