import React, { useState } from 'react'

import girl from '../assets/girl.png'
import boy from '../assets/boy.png'
import '../Css/section5.css'
function Section5() {
    const [overlay1, setOverlay1] = useState(false)
    const [overlay2, setOverlay2] = useState(false)


    return (
        <div className='section5'>
            <div className="left">
                <h1>The Team</h1>
                <h2>People who work 24/7 to make sure your finances are  always top-notch.</h2>
                <div className="bottom">
                    <p><i className="ri-checkbox-circle-fill"></i>Certified Professionals</p>
                    <p><i className="ri-checkbox-circle-fill"></i>Proven Track record of Diverse Portfolios</p>
                    <p><i className="ri-checkbox-circle-fill"></i>Over 20+ Years of Experience in Finance</p>
                </div>
            </div>
            <div className="right">
                <div className="card card1 cursor-pointer" >
                    <img src={girl} alt="" />
                    <div className="overlay" >
                        <h5>Michell James</h5>
                        <h6><i className="ri-checkbox-circle-fill"></i> Cap Certified</h6>
                        <p>With Experience of 20+ years in finance, Michell is truly the best at managing finances.</p>
                    </div>
                </div>
                <div className="card card2 cursor-pointer" >
                    <img src={boy} alt="" />
                    <div className="overlay" >
                        <h5>Jordan Ramsay</h5>
                        <h6><i className="ri-checkbox-circle-fill"></i> Cap Certified</h6>
                        <p>With over 10 years of experience in finance, Michell is truly the best  financer.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section5
