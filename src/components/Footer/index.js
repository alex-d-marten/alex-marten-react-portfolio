import React from "react";

function Footer() {
    return (
        <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
            <div className="container pt-4">
                <section className="mb-4">
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/alex.marten.58"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-facebook-f"></i
                ></a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/admarten"
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-linkedin"></i
                ></a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/alex-d-marten"
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-2x fa-github"></i
                ></a>
                </section>
            </div>

            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/"> Alex Marten</a>
            </div>
</footer>
    )
};

export default Footer;