import React from "react";
import githubIcon from '../../assets/icons/github-icon.png';
import socialNetworkApiImg from '../../assets/images/social-network-api.png'
import lookMeUpImg from '../../assets/images/look-me-up.png';
import techBlogImg from '../../assets/images/tech-blog-img.png';
import gotHopsImg from '../../assets/images/got-hops-img.png';
import readmeGeneratorImg from '../../assets/images/readme-generator-img.png';
import jotItDownImg from '../../assets/images/jot-it-down-img.png';
import onlyPetsImg from '../../assets/images/0nlypets.png'

function Project() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5 my-5">
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={onlyPetsImg} className="card-img-top" alt="Only Pets MERN Project"/>
                        <a href="https://alex-d-marten-0nlypets.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">0nlyPets</h5>
                        <a href="https://github.com/alex-d-marten/0nlypets" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={socialNetworkApiImg} className="card-img-top" alt="Social Network API"/>
                        <a href="https://github.com/alex-d-marten/social-network-api" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Social Network API</h5>
                        <a href="https://github.com/alex-d-marten/social-network-api" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={lookMeUpImg} className="card-img-top" alt="Look Me Up!"/>
                        <a href="https://look-meup.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Look Me Up! Full Stack Project</h5>
                        <a href="https://github.com/asadi80/look-me-up" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={techBlogImg} className="card-img-top" alt="Tech Blog"/>
                        <a href="https://alex-d-marten-tech-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Tech Blog</h5>
                        <a href="https://github.com/alex-d-marten/tech-blog" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={gotHopsImg} className="card-img-top" alt="Got Hops"/>
                        <a href="https://scottrohrig.github.io/got-hops/" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Got Hops Brewery Finder</h5>
                        <a href="https://github.com/scottrohrig/got-hops" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={readmeGeneratorImg} className="card-img-top" alt="Read Me Generator"/>
                        <a href="https://github.com/alex-d-marten/readme-generator" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.4)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Professional README Generator</h5>
                        <a href="https://github.com/alex-d-marten/readme-generator" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-100">
                    <div className="hover-overlay ripple bg-image" data-mdb-ripple-color="light">
                        <img src={jotItDownImg} className="card-img-top" alt="Jot It Down"/>
                        <a href="https://alex-d-marten-jot-it-down.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
                        </a>
                    </div>
                    <div className="card-body bg-dark" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                        <h5 className="card-title text-light">Jot It Down Note Taking App</h5>
                        <a href="https://github.com/alex-d-marten/jot-it-down" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} className="img-fluid" alt="githubIcon" style={{ maxWidth: "10%" }}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Project;