import React from 'react';
import "../../Assest/Scss/Footer/index.scss"
import pattern from "../../Assest/Image/pattern.png";
import { Link } from 'react-router-dom';
export const FirstFooter = () => {
    return (
        <div className='seven-section'>
            <div className='seven-section-container' id='first'>
                <img src={pattern} alt="" />
            </div>
            <div className='seven-section-container 2nd'>
                <h1>Do you want to<br/>
build a new home with us?</h1>
            </div>
            <div className='seven-section-container 3rd'>
            <Link to="/contact-us"><button type='button'> Let's Chat</button></Link>
            </div>
        </div>
    )
}