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

    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);


    return (
        <div className="container m-5">
            <div className="row justify-content-between">
                <div className="col-4">
                    <a className="btn btn-primary" data-mdb-toggle="collapse" href="#emailCollapse" role="button" aria-expanded="false" aria-controls="emailCollapse">Email</a>
                    <div className="collapse mt-3" id="emailCollapse">
                        alexdmarten@gmail.com
                    </div>
                </div>
                <div className="col-4">
                    <a className="btn btn-primary" data-mdb-toggle="collapse" href="#phoneCollapse" role="button" aria-expanded="false" aria-controls="phoneCollapse">Phone</a>
                    <div className="collapse mt-3" id="phoneCollapse">
                        916-303-6073
                    </div>
                </div>
                <div className="col-4">
                    <a className="btn btn-primary" data-mdb-toggle="collapse" href="#liCollapse" role="button" aria-expanded="false" aria-controls="liCollapse">LinkedIn</a>
                    <div className="collapse mt-3" id="liCollapse">
                    www.linkedin.com/in/admarten
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