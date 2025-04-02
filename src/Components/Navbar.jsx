import React, { useState } from 'react'

import logo from '../assets/logo.png'
import navlanguage from '../assets/navlanguage.png'
import navcalander from '../assets/calendar_month.png'
import lock_person from '../assets/lock_person.png'
import '../Css/nav.css'
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    function handelMenuOpen() {
        setShowMenu(true)
    }
    function handelMenuClose() {
        setShowMenu(false)
    }
    return (
        <div className='nav'>
            <div className="left">
                <div id="logo2">aligned<span>.</span></div>
                <div className="lmenu">
                    <p id='services'>Services <i className="ri-arrow-down-s-line"> <div id='services-cont'>
                        <h5>Services</h5>
                        <hr />
                        <p>Bookkeeping and Accounting</p>
                        <p>Tax Reduction</p>
                        <p>Receipt Management</p>
                        <p>Expense Reduction</p>
                    </div> </i></p>
                    <p>About Us</p>
                    <p>Client Portal</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="right">
                <img src={navlanguage} alt="" className='cursor-pointer' />
                <div className='rac cursor-pointer'><img src={navcalander} alt='calendar' /> <p>Request a Consultation</p></div>
                <div className='clint-login cursor-pointer'> <img src={lock_person} alt="lp" /> <p>Client Login</p></div>
            </div>
            <i id='menu-open-btn' class="ri-menu-3-line cursor-pointer" onClick={handelMenuOpen}></i>
            <div className="small-device-menu" style={{ right: showMenu ? '0px' : '-250px' }}>
                <div className='close-menu-cont'>
                    <i class="ri-arrow-right-line cursor-pointer" onClick={handelMenuClose}></i>
                </div>
                <div className="list">
                    <p>Services</p>
                    <p>About Us</p>
                    <p>Client Portal</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>Client Login</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
