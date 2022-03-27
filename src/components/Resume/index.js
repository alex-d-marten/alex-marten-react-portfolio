import React from "react";
import resumePdf from '../../assets/files/Alex_Marten_Web_Developer_Resume.pdf';

function Resume() {
    return (
        <div className="resume-body" style={{fontFamily: "'Frank Ruhl Libre', serif"}}>
            <h2 className="p-3">My Resume</h2>
            <div className="resume-download">
                <h3 className="p-3">
                    Download my 
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-info"> Resume</a>
                </h3>
            </div>
            <div className="resume-text p-3">
                <div className="front-end">
                    <h3>Front-End Experience</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="back-end">
                    <h3>Back-End Experience</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Resume;