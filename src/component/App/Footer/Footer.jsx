import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaMobile,FaYoutube,FaMapMarker } from "react-icons/fa";
import "../../Assest/Scss/Footer/index.scss"
import logo from "../../Assest/Image/logo-footer.png";

export const Footer = () => {
    return (
        <div className='eight-section'>
            
            <div className='eight-section-container'>
                <span className='logo'>
                    <img src={logo} alt="" />
                </span>
                <div>
                <p><span><FaInstagramSquare/></span>Instagram</p>
                <p><span><FaFacebookSquare/></span>Facebook</p>
                <p><span><FaYoutube/></span>Youtube</p>
                </div>
                
            </div>
            <div className='eight-section-container'>
               <h1>We build great homes.
               </h1>
               <p><span><FaMapMarker/></span>FP No. 121/2, Near Apple Green Bungalows, S.G. Highway, Chharodi, Ahmedabad- 382481.</p>
                <p><span><FaMobile/></span>+91 95123 35511</p>
            </div>
        </div>
    )
}
