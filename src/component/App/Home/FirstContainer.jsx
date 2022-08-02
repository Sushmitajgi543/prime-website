import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assest/Image/logo.png';
export const FirstContainer = () => {
    return (
        <div className='hero-section'>
            <div className='hero-section-text'>
                <div>
                <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <h1>We Bulid Great Homes</h1>
            </div>
            <div className='hero-section-menu'>
                <hr />
                <div className='hero-section-menu-para'>
                <p>
                        We build great homes. <br />Do you have a project to discuss? let's talk. <Link to="/contact-us">&rarr;</Link>
                    </p>
                <div className='hero-section-menu-para-item'>
                    <ul>
                        <li>
                            <Link to="/">  Home</Link>
                     
                        </li>
                        <li>
                        <Link to="/project">
                        Projects
                        </Link>
                         
                        </li>
                        <li>
                        <Link to="/about-us">Prime Story</Link>
                            
                        </li>
                        <li>
                        <Link to="/contact-us">Inquiry</Link>
                            
                        </li>
                    </ul>
                </div>
                    </div>
                    
            </div>

        </div>
    );
}