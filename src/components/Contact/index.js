import React from "react";

function Contact() {
    return (
        <form>
            <div className="p-5 container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label px-2">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name here"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label px-2">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label px-2">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Send me a message!" rows="7"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Contact;