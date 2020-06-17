import React from 'react';
import MainAnimation from '../Components/MainAnimation';
import Portrait from '../Ty.jpg';
const Home = () => {
    return (
        <MainAnimation>
            <div className="mb-20 md:flex ">
                <div className="md:pr-6">
                    <h1 className="font-bold">
                        <span role="img" aria-label="Waving Hand">👋🏽</span>
                    </h1>
                </div>
                <div className="">
                    <h1 className="font-bold mainTitle">
                        Hey there,
                    </h1>
                    <h1 className="font-medium">
                        It's nice to meet you.
                    </h1>
                </div>
            </div>

            <div className="md:flex flex-wrap justify-between">
                <p className="self-center my-8 text-2xl flex-1">
                    I'm Yohan, a Computer Engineering student @Epita,
                    passionate about clean code.
                    <br/>
                    I'm currently looking for a 4 months internship in front-end engineering,
                    starting from September.
                    <br/>
                    I'm Yohan, a Computer Engineering student @Epita,
                    passionate about clean code.
                    <br/>
                    I'm currently looking for a 4 months internship in front-end engineering,
                    starting from September.
                </p>
                <div className="m-auto imgDiv flex flex-1 self-center justify-center portrait">
                    <img className="portrait" src={Portrait} alt="Yohan Tancrez portrait"></img>
                </div>
            </div>

        </MainAnimation>
    )
}

export default Home;