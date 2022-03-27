import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    const {
        setContactSelected,
        setProjectSelected,
        setResumeSelected
    } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mt-2 mt-lg-0" href="/about" onClick={() => {
                    setContactSelected(false)
                    setProjectSelected(false)
                    setResumeSelected(false)
                }}>
                    <h1>Alex Marten</h1>
                </a>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                        <li className="nav-item">
                            <NavLink 
                            to="/about"
                            className="nav-link" 
                            activeStyle={{ color: 'red' }}
                            onClick={() => {
                                setContactSelected(false)
                                setProjectSelected(false)
                                setResumeSelected(false)
                            }}>About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/portfolio"
                            activeStyle={{ color: 'red' }}
                            onClick={() => {
                                setProjectSelected(true)
                                setContactSelected(false)
                                setResumeSelected(false)
                            }}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/contact" 
                            activeStyle={{ color: 'red' }}
                            onClick={() => {
                                setContactSelected(true)
                                setProjectSelected(false)
                                setResumeSelected(false)
                                }}
                            >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/resume" 
                            activeStyle={{ color: 'red' }}
                            onClick={() => {
                                setResumeSelected(true)
                                setProjectSelected(false)
                                setContactSelected(false)
                            }}>Resume</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;