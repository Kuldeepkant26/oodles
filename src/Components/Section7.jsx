import React from 'react'
import '../Css/section7.css'
import globe from '../assets/globe2.png'
function Section7() {
    return (
        <div className='section7'>
            <button className='btn1'>Request a Consultation <div className="arrow-box"><i class="ri-arrow-right-up-line"></i></div></button>
            <h1>Serving Globally</h1>
            <h2>Presence in more than 20 Countries, across all domains.</h2>
            <img className='globe-img' src={globe} alt="" />
        </div>
    )
}

export default Section7
