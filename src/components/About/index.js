import React from 'react';
import avatarImage from '../../assets/images/avatar-placeholder.png'

function About() {
    return (
        <section className="p-3">
            <div>
                <h1 className="py-3">About Me</h1>
                {/* include a picture of an avatar/me here */}
                <img src={avatarImage} alt="avatar" style={{ width: "100px"}} className="my-5"/>
                <h3>Introduction</h3>
                <p className="py-3">My name is Alex Marten and welcome to my React Portfolio. The above navigation bar can take you to different sections of my portfolio to view my current projects, how to contact me and to view my resume. Take a look around and if you ahve any questions please contact me in the contact section.</p>
            </div>
            <div>
                <h3>Hobbies</h3>
                <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed dictum arcu. Vivamus id lorem nulla. Morbi ultricies dui rhoncus est tristique, non finibus odio rutrum. Integer a mollis lorem. Praesent vel varius dolor. Aliquam libero nulla, egestas in risus.</p>
            </div>
        </section>
    )
}

export default About;