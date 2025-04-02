import React from 'react'
import logo2 from '../assets/logo2.png'
import '../Css/footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div id="logo2">aligned<span>.</span></div>
            <div className="first">
                <div className="fcard">
                    <i className="ri-phone-fill"></i>
                    <div className="rp">
                        <h4>Tel</h4>
                        <a href="">310-437-2766</a>
                    </div>
                </div>
                <div className="fcard">
                    <i className="ri-mail-check-line"></i>
                    <div className="rp">
                        <h4>Mail</h4>
                        <a href="">unreal@outlook.com</a>
                    </div>
                </div>
                <div className="fcard">
                    <i className="ri-map-pin-2-line"></i>
                    <div className="rp">
                        <h4>Address</h4>
                        <a href="">706 Campfire Ave. Meriden</a>
                    </div>
                </div>
                <div className="fcard">
                    <i className="ri-printer-line"></i>
                    <div className="rp">
                        <h4>Fax</h4>
                        <a href="">+1-000-0000</a>
                    </div>
                </div>
            </div>

            <div className="second">
                <div className="left">
                    <a href="">About us</a>
                    <a href="">Contact</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Sitemap</a>
                    <a href="">Terms of Use</a>
                    <a href="">FAQ</a>
                </div>
                <div className="right">© 2024-2025, All Rights Reserved</div>
            </div>

        </div>
    )
}

export default Footer
