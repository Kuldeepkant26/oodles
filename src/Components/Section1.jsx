import React from 'react'

import '../Css/section1.css'
import frame1 from '../assets/frame1.png'
import rating1 from '../assets/rating1.png'
function Section1() {
    return (
        <div className='section1'>
            <div className="left">
                <div className='top'><p>Google Rating </p><img src={rating1} alt="" /><p>Based on 2.7k ratings</p></div>
                <h1>Expert Accounting Solutions For Smarter Business Decisions </h1>
                <h2>Your Accounting Partner: Tax Solutions,Strategic Advice, <br /> and BookKeeping</h2>
                <div className="btns">
                    <button className='btn1'>Request a Consultation <div className="arrow-box"><i class="ri-arrow-right-up-line"></i></div></button>
                    <button className='btn2'>Get in Touch <div className="arrow-box"><i class="ri-arrow-right-up-line"></i></div></button>
                </div>

            </div>
            <img src={frame1} alt="" />
        </div>
    )
}

export default Section1
