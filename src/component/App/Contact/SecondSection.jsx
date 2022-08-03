import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import contactpattern from '../../Assest/Image/contact-pattern.png';
export const SecondSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.cnt-second-section',
                start: 'top center'
            }
        })
            
            .fromTo(".cnt-second-section h1", { x: -200, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
            })

            .fromTo(".cnt-second-section-right-form-group",{ y: '100',opacity: 0 },
            {stagger:.7,  y: 10, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
    })
    return (
        <div className="cnt-second-section">
            <div className="cnt-second-section-left">
                <h1>We’d love
                    to hear
                    from you.</h1>
                    <span>  <img src={contactpattern} alt="" /></span>
            </div>
            <div className="cnt-second-section-right">
                <form className='cnt-second-section-right-form'>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="name">Name <span>*</span></label> */}
                        <input type="text" id="name" placeholder='Name*' />
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="email">Email<span>*</span></label> */}
                        <input type="email" id="email" placeholder='Email*' />
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        {/* <label htmlFor="message">Message</label> */}
                        <input type="text" id="message" placeholder='Message' />

                        {/* <textarea id="message" placeholder='Message' /> */}
                    </div>
                    <div className="cnt-second-section-right-form-group">
                        <button type="submit">Submit &rarr;</button>
                    </div>
                </form>
            </div>
        </div>

    )
}