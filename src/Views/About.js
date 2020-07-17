import React from 'react';
import Profile from '../Ty.jpg'

const About = () => {
    return (
        <section className="view mt-20" id="about_section">
            <h2 data-aos="fade-right" className="py-10 text-5xl">
                ABOUT ME
            </h2>
            <div className="md:flex flex-wrap justify-between">
                <p data-aos="fade-up" className="self-center my-8 text-2xl flex-1">
                    I am Yohan, a computer engineering student, passionate about software engineering and clean code.
                    <br/>
                    <br/>
                    I'm currently looking for a 4 months internship in front-end engineering,
                    starting from September.
                </p>
                <div data-aos="fade-left" className="m-auto imgDiv flex flex-1 self-center justify-center ">
                    <img className="portrait" src={Profile} alt="Yohan Tancrez portrait"></img>
                </div>
            </div>
        </section>
    )
}

export default About;