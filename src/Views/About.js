import React from 'react';
import MainAnimation from '../Components/MainAnimation';
import Portrait from '../Ty.jpg';
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
            <div className="flex flex-wrap justify-between">
                <div className="flex-1">
                    <p className="self-stretch my-8 text-2xl">
                        I'm currently a Computer Engineering student at Epita,
                        passionate about clean code.
                    </p>
                </div>
                <div className="test flex flex-1 self-center justify-center portrait">
                    <img className="portrait" src={Portrait}></img>
                </div>
            </div>

        </MainAnimation>
    )
}

export default Home;