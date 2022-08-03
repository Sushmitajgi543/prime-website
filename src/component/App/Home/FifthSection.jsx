import {React,useRef,useEffect} from 'react';
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
                trigger: '.fifth-section',
                start: 'bottom bottom'}
            })
            .fromTo(".fifth-section-container-left h1", {x:-300, opacity: 0},{
                x:0,opacity: 1, duration: 1.5, ease: 'power1.inOut'
            })
            
            .fromTo(".fifth-section-container-right h1", {x:300, opacity: 0},{
                x:0,opacity: 1, duration: 1, ease: 'power1.inOut',delay:0
            },"+=0.1")

    })
    return (
        <div  ref={t1} className="fifth-section">
            <div className="fifth-section-container">
                <div className="fifth-section-container-left">
                    <h1>Your Dream
                        Courtyard.</h1>
                </div>
                <div className="fifth-section-container-right">
                    <h1>COMING

                        SOON.</h1>

                </div>
            </div>
        </div>
    )
}
