import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ThirdSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.abt-third-section',
                start: 'top center'
            }
        })
            

            .fromTo(".abt-third-section ",{ y: '100',opacity: 0 },
            {stagger:.7,  y: 10, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
            .fromTo(".abt-third-section-left h1", { y: 200, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
            })
            .fromTo(".abt-third-section-left p", { y: 200, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
            })
    })
    return (
        <div className='abt-third-section'>
            <div className='abt-third-section-left'>
                <h1>PRIME DEVELOPERS</h1>
                <p>Prime wants to build beautiful homes
                    that connect people with their spaces
                    meaningfully and comfortably.</p>
            </div>
            <div className='abt-third-section-right'>
           </div>

        </div>
    )
}
