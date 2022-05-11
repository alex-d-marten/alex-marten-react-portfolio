import React from "react";
import resumePdf from '../../assets/files/Alex_Marten_Web_Developer_Resume.pdf';

function Resume() {
    return (
        <div className="resume-body">
            <div className="resume-download my-3">
                <h3 className="p-3">
                    Download my 
                    <a className="text-decoration-none" href={resumePdf} target="_blank" rel="noopener noreferrer"> Resume</a>
                </h3>
            </div>
            <div className="skills my-3 card">
                <ul className="list-group m-4">
                    <li className="skillItem py-3 list-group-item">
                        <a className="collapsible fs-3 text-dark" data-bs-toggle="collapse" href="#languages" aria-expanded="false" aria-controls="languages">Programming Languages</a>
                        <div className="collapse" id="languages">
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Python</li>
                                <li>PowerShell</li>
                                <li>C#</li>
                                <li>SQL</li>
                                <li>NoSQL (MongoDB)</li>
                            </ul>
                        </div>
                    </li>
                    <li className="skillItem py-3 list-group-item">
                        <a className="collapsible fs-3 text-dark" data-bs-toggle="collapse" href="#libraries" aria-expanded="false" aria-controls="libraries">Libraries and Frameworks</a>
                        <div className="collapse" id="libraries">
                            <ul>
                                <li>JQuery</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                    </li>
                    <li className="skillItem py-3 list-group-item">
                        <a className="collapsible fs-3 text-dark" data-bs-toggle="collapse" href="#tools" aria-expanded="false" aria-controls="tools">Tools and Platforms</a>
                        <div className="collapse" id="tools">
                            <ul>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>APIs</li>
                                <li>Windows 7/10/11</li>
                                <li>Mac OS X</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="m-3 py-3">Education</h3>
                <div className="card">
                    <ul className="list-group m-4">
                        <li className="list-group-item fs-4">UC Davis Chemical Engineering B.S - June 2019</li>
                        <li className="list-group-item fs-4">UC Berkeley Extension Coding BootCamp Certificate - April 2022</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Resume;