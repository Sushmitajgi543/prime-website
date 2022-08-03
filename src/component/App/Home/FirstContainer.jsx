import { React, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from '../../Assest/Image/logo.png';
export const FirstContainer = () => {

    const eleRef = useRef();

    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        gsap.fromTo(".hero-section h1", { x: -100, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, ease: 'power1.inOut', delay: 0.3
        })
        gsap.fromTo("hr", { x: 300, opacity: 0 }, {
            x: 0, opacity: 1, duration: 2, ease: 'power1.inOut', delay: 0.3
        })
    })

    return (
        <div ref={eleRef} className='hero-section'>
            <div className='hero-section-text'>
                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <h1>We Build Great Homes</h1>
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