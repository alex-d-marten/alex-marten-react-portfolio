import React from 'react';
import avatarImage from '../../assets/images/selfie.jpg'

function About() {
    return (
        <section className="p-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
            <div>
                <h1 className="py-3">About Me</h1>
                {/* include a picture of an avatar/me here */}
                <img src={avatarImage} alt="avatar" style={{ width: "400px"}} className="my-5"/>
                <h3>Introduction</h3>
                <p className="py-3">My name is Alex Marten and welcome to my React Portfolio! I am an aspiring web developer and am looking to portray some of the projects I have completed during the UC Berkely Bootcamp. This portfolio is a single page application and this has been accomplished with React.
                <br />
                <br />
                The above navigation bar can take you to different sections of my portfolio to view my current projects, how to contact me and to view my resume. Take a look around and if you have any questions please contact me in the contact section.
                </p>
            </div>
        </section>
    )
}

export default About;