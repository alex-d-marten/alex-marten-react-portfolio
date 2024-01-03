import React from 'react';
import avatarImage from '../../assets/images/profile-pic.jpeg'

function About() {
    return (
        <section className="p-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
            <div>
                <h1 className="py-3 text-center">About Me</h1>
                {/* include a picture of an avatar/me here */}
                <img src={avatarImage} alt="avatar" style={{ width: "400px"}} className="my-5 mx-auto d-block"/>
                <h3 className="text-center">Introduction</h3>
                <p className="py-3 text-start">My name is Alex Marten and welcome to my React Portfolio! I am an aspiring Software Engineer and am looking to portray some of the projects I have completed. This portfolio is a single page application and this has been accomplished with React. The projects I have completed portray work done in the UC Berkeley bootcamp and taught me most of what I know about JavaScript. Since then I have been able to use my skills in industry as a Lab Automation Engineer to help with programming robots to achieve the needed task. I have also developed my skills with Python so to use in industry and leveraged my knowledge of JavaScript to aid in this. The above navigation bar can take you to different sections of my portfolio to view my current projects, how to contact me and to view my qualifications. Thanks for visiting!
                </p>
            </div>
        </section>
    )
}

export default About;