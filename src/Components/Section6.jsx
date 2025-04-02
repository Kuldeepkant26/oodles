import React from 'react'

import '../Css/section6.css'

import jordan from '../assets/jordan.jpeg'
import emily from '../assets/emily.jpeg'
import minlen from '../assets/minlen.jpeg'
import rating2 from '../assets/rating2.png'
import rating3 from '../assets/rating3.png'

function Section6() {
    return (
        <div className='section6'>
            <h1>Testimonials</h1>
            <h2>Don't Just Take our words.</h2>
            <div className="marquee">
                <div className="marquee__inner">
                    <div className="tcard">
                        <div className="top">
                            <img src={jordan} alt="" />
                            <div className="names">
                                <h3>Jordan Ramsay</h3>
                                <p>Founder @Moneyez</p>
                            </div>
                        </div>
                        <img src={rating2} className='rating-img' alt="" />
                        <p className='about'>
                            we’ve significantly reduced our expenses and improved our profitability. Their expense reduction strategies helped us streamline costs we didn’t even realize we could cut.
                        </p>
                    </div>
                    <div className="tcard">
                        <div className="top">
                            <img src={minlen} alt="" />
                            <div className="names">
                                <h3>Minlen Lisbon</h3>
                                <p>Accounts @Delloit</p>
                            </div>
                        </div>
                        <img src={rating3} className='rating-img' alt="" />
                        <p className='about'>
                            Their expert tax strategies and attention to detail have saved us thousands. We trust them completely with our financials and monetary handling.
                        </p>
                    </div>
                    <div className="tcard">
                        <div className="top">
                            <img src={emily} alt="" />
                            <div className="names">
                                <h3>Emily Rose</h3>
                                <p>CA @Subnice</p>
                            </div>
                        </div>
                        <img src={rating2} className='rating-img' alt="" />
                        <p className='about'>
                            The bookkeeping service is incredible! They've taken the stress out of managing our finances, and now we always have up-to-date reports .ith our financials and monetary handling.
                        </p>
                    </div>
                    <div className="tcard">
                        <div className="top">
                            <img src={jordan} alt="" />
                            <div className="names">
                                <h3>Jordan Ramsay</h3>
                                <p>Founder @Moneyez</p>
                            </div>
                        </div>
                        <img src={rating2} className='rating-img' alt="" />
                        <p className='about'>
                            we’ve significantly reduced our expenses and improved our profitability. Their expense reduction strategies helped us streamline costs we didn’t even realize we could cut.
                        </p>
                    </div>
                    <div className="tcard">
                        <div className="top">
                            <img src={minlen} alt="" />
                            <div className="names">
                                <h3>Minlen Lisbon</h3>
                                <p>Accounts @Delloit</p>
                            </div>
                        </div>
                        <img src={rating3} className='rating-img' alt="" />
                        <p className='about'>
                            Their expert tax strategies and attention to detail have saved us thousands. We trust them completely with our financials and monetary handling.
                        </p>
                    </div>
                    <div className="tcard">
                        <div className="top">
                            <img src={emily} alt="" />
                            <div className="names">
                                <h3>Emily Rose</h3>
                                <p>CA @Subnice</p>
                            </div>
                        </div>
                        <img src={rating2} className='rating-img' alt="" />
                        <p className='about'>
                            The bookkeeping service is incredible! They've taken the stress out of managing our finances, and now we always have up-to-date reports .ith our financials and monetary handling.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section6
