import React, { useState } from 'react';
import Nav from '../Nav';
import Contact from '../Contact';
import About from '../About';

function Header() {
    const [contactSelected, setContactSelected] = useState(false);

    return (
        <header>
            <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                    <About></About>
                    </>
                ) : (
                    <Contact></Contact>
                )}
            </main>
        </header>
    )
};

export default Header;