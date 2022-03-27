import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink 
                className="navbar-brand mt-2 mt-lg-0" 
                to="/about"
                >
                    <h1>Alex Marten</h1>
                </NavLink>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                        <li className="nav-item">
                            <NavLink 
                            to="/about"
                            className="nav-link" 
                            activeStyle={{ color: 'rgba(226, 226, 226, 1)' }}
                            >About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/portfolio"
                            activeStyle={{ color: 'rgba(226, 226, 226, 1)' }}
                            >Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/contact" 
                            activeStyle={{ color: 'rgba(226, 226, 226, 1)' }}
                            >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link" 
                            to="/resume" 
                            activeStyle={{ color: 'rgba(226, 226, 226, 1)' }}
                            >Resume</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;