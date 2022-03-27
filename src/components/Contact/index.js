import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '',});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            console.log('Email selected')
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
        alert('This form is in progress, please email me at "alexdmarten@gmail.com" or contact me on LinkedIn');
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
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
        </form>
    )
}

export default Contact;