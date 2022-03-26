import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mt-2 mt-lg-0" href="index.html">
                    <h1>Alex Marten</h1>
                </a>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;