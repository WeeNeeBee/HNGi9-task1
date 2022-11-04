import React from "react";
import './contact.css'


const Contact = () => {

    const name = "WeeNeeBee";
    return(
        <div className="container">
            <h1>Contact Me</h1>
            <p className="text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="first-last-name">
                    <div className="form-control">
                        <label>First name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name" />
                        
                    </div>

                    <div className="form-control">
                        <label>Last name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name" />
                    </div>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input type="enail" id="email" placeholder="yourname@gmail.com" />
                </div>

                <div className="form-control">
                    <label>Message</label>
                    <textarea id="message" placeholder = "Send me a message and I'll reply you as soon as possible..."></textarea>
                </div>

                <div className="checkbox">
                    <input type= 'checkbox' />
                    <label>You agree to providing your data to {name} who may contact you.</label>
                </div>

                <button id="btn__submit" className="btn">Send Message</button>
            </form>
        </div>
    )
}



export default Contact