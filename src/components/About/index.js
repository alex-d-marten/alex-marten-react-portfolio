import React from 'react';
import avatarImage from '../../assets/images/selfie.jpg'

function About() {
    return (
        <section className="p-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
            <div>
                <h1 className="py-3 text-center">About Me</h1>
                {/* include a picture of an avatar/me here */}
                <img src={avatarImage} alt="avatar" style={{ width: "400px"}} className="my-5 mx-auto d-block"/>
                <h3 className="text-center">Introduction</h3>
                <p className="py-3 text-start">My name is Alex Marten and welcome to my React Portfolio! I am an aspiring Software Engineer and am looking to portray some of the projects I have completed. This portfolio is a single page application and this has been accomplished with React. The above navigation bar can take you to different sections of my portfolio to view my current projects, how to contact me and to view my resume. Take a look around and if you have any questions please contact me in the contact section.
                </p>
            </div>
        </section>
    )
}

export default About;