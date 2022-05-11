import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '',});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValidEmail = validateEmail(e.target.value);
            if(!isValidEmail) {
                setErrorMessage('The email entered is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`)
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert('This form is in progress, please email me at `alexdmarten@gmail.com` or contact me on LinkedIn');
    }

    return (
        <div className="container m-5">
            <div className="row justify-content-between">
                <div className="my-3 col-sm-6 col-md-3">
                    <div className="card">
                        <a className="btn btn-outline-dark" href="mailto:alexdmarten@gmail.com" target="_blank" rel="noreferrer">
                            <div className="card-body">
                                <span>
                                    <i className="fa-solid fa-envelope fa-xl"></i>
                                </span>
                                <div>Email</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="my-3 col-sm-6 col-md-3">
                    <div className="card">
                        <a className="btn btn-outline-dark" href="tel:1-916-303-6073" target="_blank" rel="noreferrer">
                            <div className="card-body">
                                <span>
                                    <i className="fa-solid fa-phone fa-xl"></i>
                                </span>
                                <div>Call</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="my-3 col-sm-6 col-md-3">
                    <div className="card">
                        <a className="btn btn-outline-dark" href="https://github.com/alex-d-marten" target="_blank" rel="noreferrer">
                            <div className="card-body">
                                <span>
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </span>
                                <div>Follow</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="my-3 col-sm-6 col-md-3">
                    <div className="card">
                        <a className="btn btn-outline-dark" href="https://www.linkedin.com/in/admarten" target="_blank" rel="noreferrer">
                            <div className="card-body">
                                <span>
                                    <i className="fa-brands fa-linkedin fa-xl"></i>
                                </span>
                                <div>Connect</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div className="p-5 container">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label px-2">Name</label>
                        <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label px-2">Email address</label>
                        <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label px-2">Message</label>
                        <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7"></textarea>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form> */}
        </div>
    )
}

export default Contact;