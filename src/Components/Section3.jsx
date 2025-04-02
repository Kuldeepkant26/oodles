import React from 'react'

import bookkeep from '../assets/bookkeep.png'
import tax from '../assets/tax.png'
import recipt from '../assets/recipt.png'
import expense from '../assets/expense.png'

import '../Css/section3.css'
function Section3() {
    return (
        <div className='section3'>
            <h1>Our Services</h1>
            <h2>Powerful services that drive efficiency and growth.</h2>
            <div className="cards">
                <div className="card">
                    <img src={bookkeep} alt="" />
                    <h3>Bookkeeping & Accounting</h3>
                    <p>From managing daily transactions and reconciling accounts to tracking expenses and generating detailed financial reports, we handle all aspects.</p>
                    <button>Know More <div className="arrow-box"><i className="ri-arrow-right-up-line"></i></div></button>
                </div>
                <div className="card">
                    <img src={tax} alt="" />
                    <h3>Tax Reduction</h3>
                    <p>Our team analyzes your financial situation, identifies deductions, credits, and opportunities, and implements proven strategies to legally reduce your tax liability.</p>
                    <button>Know More <div className="arrow-box"><i className="ri-arrow-right-up-line"></i></div></button>
                </div>
                <div className="card">
                    <img src={recipt} alt="" />
                    <h3>Recipt Management</h3>
                    <p>Our system ensures that all your receipts are available when you need them. Whether for tax preparation, audits, or financial planning.</p>
                    <button>Know More <div className="arrow-box"><i className="ri-arrow-right-up-line"></i></div></button>
                </div>
                <div className="card">
                    <img src={expense} alt="" />
                    <h3>Expense Reduction</h3>
                    <p>With our expense reduction service, you'll gain greater financial control, reduce waste, unlock more resources and save the hassle.</p>
                    <button>Know More <div className="arrow-box"><i className="ri-arrow-right-up-line"></i></div></button>
                </div>


            </div>
        </div>
    )
}

export default Section3
