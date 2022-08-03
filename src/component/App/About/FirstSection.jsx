import {React,useRef,useEffect} from 'react';
import { gsap,Power4 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import circle from '../../Assest/Image/circle.png';
export const FirstSection = () => {
    
    const eleRef = useRef();

    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        gsap.fromTo(".first-section h1", { x: 900, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.6, ease:Power4.easeOut,
        })
        gsap.fromTo("hr", { x: 300, opacity: 0 }, {
            x: 0, opacity: 1, duration: 2, ease: 'power1.inOut', delay: 0.3
        })
    })
    return (
        <div ref={eleRef} className="first-section">
            <div className="first-section-left">
                
                <div className="first-section-left-content">
                    
                    </div>
            </div>
            <div className="first-section-right">
                <h1>RE
                    <span>
                        <img src={circle} alt="" />
                    </span>
                     DEFINING EXPERIENCES</h1>
            </div>
        </div>
    )
}
