import React from "react";

function Footer() {
    return (
        <footer className="text-center text-white">
            <div className="container">
                <section className="mt-3">
                <a
                    className="text-light m-2"
                    href="https://www.facebook.com/alex.marten.58"
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-facebook-f"></i
                ></a>
                <a
                    className="text-light m-2"
                    href="https://www.linkedin.com/in/admarten"
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-linkedin"></i
                ></a>
                <a
                    className="text-light m-2"
                    href="https://github.com/alex-d-marten"
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-github"></i
                ></a>
                </section>
            </div>
</footer>
    )
};

export default Footer;