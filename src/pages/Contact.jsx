import React, { useState } from 'react';
import './contact.css'



const Contact = () => {
     
    const [formValues, setFormValues ] = useState(
        {
            firstname: '',
            lastname: '',
            email: '',
            message:''
        }
    )

    const [formErrors, setFormErrors] = useState({
            firstname: '',
            lastname: '',
            email: '',
            message:'',
            checkbox:''

    })
    const [isSubmit, setIsSubmit] = useState(false)
    
    const myName = "WeeNeeBee";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        clearForm()
    }

    
    const firstNameErrorBorder = document.getElementById('first_name')
    const lastNameErrorBorder = document.getElementById('last_name')
    const emailErrorBorder = document.getElementById('email')
    const messageErrorBorder = document.getElementById('message')
    const checkboxErrorBorder = document.getElementById('checkbox')

    const clearForm = () => {
        if (Object.values(formErrors).every((x) => x === "") && isSubmit) {
            setFormValues({
                firstname: '',
                lastname: '',
                email: '',
                message:''
            })
            checkboxErrorBorder.checked = false;
        };
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if(!values.firstname){
            errors.firstname = "Firstname is required!"
            firstNameErrorBorder.classList.add('red-border')
        } else{
            errors.firstname = ""
            firstNameErrorBorder.classList.remove('red-border')
        }
        if(!values.lastname){
            errors.lastname = "Lastname is required!"
            lastNameErrorBorder.classList.add('red-border')
        } else {
            errors.lastname = ""
            lastNameErrorBorder.classList.remove('red-border')
        }
        if(!values.email){
            errors.email = "Email is required!"
            emailErrorBorder.classList.add('red-border')
        } else if(!regex.test(values.email)) {
            errors.email = "Please enter a valid email."
            emailErrorBorder.classList.add('red-border')
        } else{
            errors.email = ""
            emailErrorBorder.classList.remove('red-border')
        }
        if(!values.message){
            errors.message = "Please enter a message"
            messageErrorBorder.classList.add('red-border')
        } else{
            errors.message = ""
            messageErrorBorder.classList.remove('red-border')
        }
        if(!checkboxErrorBorder.checked){
            errors.checkbox = "You must agree to providing your data."
            checkboxErrorBorder.classList.add('red-border')
        } else{
            errors.checkbox = ""
            checkboxErrorBorder.classList.remove('red-border')
        }

        return errors
    }

    return(
        <div className="container">
            <h1>Contact Me</h1>
            <p className="text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit}>
                <div className="first-last-name">
                    <div className="form-control">
                        <label htmlFor='firstname'>First name</label>
                        <input 
                            type="text" 
                            id="first_name" 
                            name='firstname'
                            placeholder="Enter your first name"  
                            value={formValues.firstname}
                            onChange={handleChange}
                        />
                    <p className='errormessage'>{formErrors.firstname}</p>  
                    </div>

                    <div className="form-control">
                        <label htmlFor='lastname'>Last name</label>
                        <input 
                            type="text" 
                            id="last_name" 
                            name='lastname'
                            placeholder="Enter your last name" 
                            value={formValues.lastname} 
                            onChange={handleChange}
                        />
                        <p className='errormessage'>{formErrors.lastname}</p>
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input 
                    type="email" 
                    id="email"
                    name='email'
                    placeholder="yourname@email.com" 
                    value={formValues.email} 
                    onChange={handleChange}
                />
                <p className='errormessage'>{formErrors.email}</p>
                </div>

                <div className="form-control">
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        id="message" 
                        name='message'
                        placeholder = "Send me a message and I'll reply you as soon as possible..." 
                        value={formValues.message}
                        onChange={handleChange}>
                    </textarea>
                    <p className='errormessage'>{formErrors.message}</p>
                </div>

                <div className="checkbox">
                    <input 
                        type= 'checkbox' 
                        id='checkbox' 
                        name='checkbox'
                    />
                    <label htmlFor='checkbox'>You agree to providing your data to {myName} who may contact you.</label>
                    
                </div>
                <p className='errormessage'>{formErrors.checkbox}</p>

                <button id="btn__submit" className="btn">Send Message</button>
            </form>
            {Object.values(formErrors).every((x) => x === "") && isSubmit? (<div className='success-message'>Message Sent!</div>) : ""}
        </div>
    )
}



export default Contact
