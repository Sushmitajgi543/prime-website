import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FifthSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.abt-fifth-section',
                start: 'top center'
            }
        })
            

            .fromTo(".abt-fifth-section ",{ y: '100',opacity: 0 },
            {  y: 10, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
            .fromTo(".abt-fifth-section h1", { x: -200, opacity: 0 }, {
                x: 0, opacity: 1, duration: .3, ease: 'power1.inOut'
            })
            .fromTo(".abt-fifth-section-content div",{ x: '-100',opacity: 0 },
            {stagger:.7,  x: 0, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
    })
    return (
        <div className="abt-fifth-section">
            <h1>OUR MARKS OF SUCCESS</h1>
            <div className="abt-fifth-section-content">
                <div>
                    <span>01</span>
                    <h4>Quality</h4>
                </div>
                <div>
                    <span>02</span>
                    <h4>Trust</h4>
                        </div>
                <div>
                    <span>03</span>
                    <h4>Commitment</h4>
                    </div>
                <div id='last'>
                    <span>04</span>
                    <h4>Excellence</h4>
                    </div>
            </div>
            </div>
    )
}