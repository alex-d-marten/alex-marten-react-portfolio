import React, { useState } from 'react';
import Nav from '../Nav';
import Contact from '../Contact';
import About from '../About';
import Project from '../Project';
import Resume from '../Resume';

function Header() {
    const [contactSelected, setContactSelected] = useState(false);
    const [projectSelected, setProjectSelected] = useState(false);
    const [resumeSelected, setResumeSelected] = useState(false);

    function renderContent() {
        if(contactSelected) {
            return <Contact></Contact>
        } else if(projectSelected) {
            return <Project></Project>
        } else if(resumeSelected) {
            return <Resume></Resume>
        } else {
            return <About></About>
        }
    };

    return (
        <header>
            <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            projectSelected={projectSelected}
            setProjectSelected={setProjectSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            ></Nav>
            <main>
                {renderContent()}
            </main>
        </header>
    )
};

export default Header;