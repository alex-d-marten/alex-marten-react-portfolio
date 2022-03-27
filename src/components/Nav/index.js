import React from 'react';

function Nav(props) {
    const {
        setContactSelected,
        setProjectSelected,
        setResumeSelected
    } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mt-2 mt-lg-0" href="#about" onClick={() => {
                    setContactSelected(false)
                    setProjectSelected(false)
                    setResumeSelected(false)
                }}>
                    <h1>Alex Marten</h1>
                </a>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={() => {
                                setContactSelected(false)
                                setProjectSelected(false)
                                setResumeSelected(false)
                            }}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio" onClick={() => {
                                setProjectSelected(true)
                                setContactSelected(false)
                                setResumeSelected(false)
                            }}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={() => {
                                setContactSelected(true)
                                setProjectSelected(false)
                                setResumeSelected(false)
                                }}
                            >Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume" onClick={() => {
                                setResumeSelected(true)
                                setProjectSelected(false)
                                setContactSelected(false)
                            }}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;