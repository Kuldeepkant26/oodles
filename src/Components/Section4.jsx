import React from 'react'

import sec4img from '../assets/section4img.png'
import '../Css/section4.css'
function Section4() {
    return (
        <div className='section4'>
            <h1>Proven Track Record Across Industries</h1>
            <div className="box">
                <img src={sec4img} alt="" />
                <div className="inner-box">
                    <div className="inner-box-card">
                        <h4>250+</h4>
                        <p>Happy Clients</p>
                    </div>
                    <div className="inner-box-card">
                        <h4>20B$+</h4>
                        <p>Finances Managed</p>
                    </div>
                    <div className="inner-box-card">
                        <h4>20+</h4>
                        <p>Serving Countries</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4
