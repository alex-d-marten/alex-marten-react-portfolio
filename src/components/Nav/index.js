import React, { useState } from 'react';

function Nav(props) {
    const [categories] = useState(['About Me', 'Portfolio', 'Contact', 'Resume']);
    const [currentCategory, setCurrentCategory] = useState(categories);

    const {
        setContactSelected,
        setProjectSelected,
        setResumeSelected,
    } = props;
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <li 
                className="nav-item navbar-brand mt-2 mt-lg-0" 
                onClick={() => {
                    setContactSelected(false)
                    setProjectSelected(false)
                    setResumeSelected(false)
                }}>
                    <h1>Alex Marten</h1>
                </li>
                <div className="d-flex align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                            {categories.map((category) => (
                                <li
                                    className={`nav-item mx-3 ${
                                        currentCategory === category && 'navActive'
                                    }`}
                                    key={category}
                                >
                                    <span onClick={() => {
                                            setCurrentCategory(category)
                                            if(category === 'Resume') {
                                                setContactSelected(false)
                                                setProjectSelected(false)
                                                setResumeSelected(true)
                                            } else if(category === 'Portfolio') {
                                                setContactSelected(false)
                                                setProjectSelected(true)
                                                setResumeSelected(false)
                                            } else if(category === 'Contact') {
                                                setContactSelected(true)
                                                setProjectSelected(false)
                                                setResumeSelected(false)
                                            } else {
                                                setContactSelected(false)
                                                setProjectSelected(false)
                                                setResumeSelected(false)
                                            }
                                        }}
                                        >{category}
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;