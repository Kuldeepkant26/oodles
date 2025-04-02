import React from 'react'

import '../Css/section8.css'
import cs from '../assets/cs.png'
function Section8() {
    return (
        <div className='section8'>
            <div className="left">
                <h1>Get In Touch</h1>
                <h2>Drop in a message and offload your finances to one of the world’s leading accounting firms today.</h2>
                <img src={cs} alt="" />
            </div>
            <form className="contact-form">
                <div className="name">
                    <div className="first-name">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" name="firstName" placeholder='First Name' />
                    </div>
                    <div className="form-group" id='last-name'>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" name="lastName" placeholder='Last Name' />
                    </div>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='you@company.com' />
                </div>
                <div className="email">
                    <label htmlFor="email">Message</label>
                    <textarea type="email" id="email" name="email" placeholder='include a message' rows={5} />
                </div>
                <div className="privacy-policy">
                    <input type="checkbox" />
                    <p>You agree to our <a href="">privacy policy</a></p>
                </div>
                <button>Send message</button>
            </form>
        </div>
    )
}

export default Section8
