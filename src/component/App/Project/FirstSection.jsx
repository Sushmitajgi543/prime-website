import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectImg from '../../Assest/Image/project-img.png';
export const FirstSection = () => {

    const eleRef = useRef();

    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        gsap.fromTo(".pj-first-section h1", { x: 300, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1, ease: 'power1.inOut', delay: 0.3
        })
        gsap.fromTo(".pj-first-section h2", { x: -300, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut', delay: 1
        })
        gsap.fromTo("hr", { x: 300, opacity: 0 }, {
            x: 0, opacity: 1, duration: 2, ease: 'power1.inOut', delay: 0.3
        })
    })
    return (

        <div ref={eleRef} className="pj-first-section">
            <div className="pj-first-section-left">
                <div className="pj-first-section-left-top">
                    <img src={projectImg} alt="" />
                </div>
                <div className="pj-first-section-left-middle">
                    <div>
                        <p>4BHK</p>
                        <p>42 Units</p>
                    </div>
                    <div>
                        <p>3BHK </p>
                        <p>44 Units</p>
                    </div>
                    <div>
                        <p>PENTHOUSE</p>
                        <p>04 Units</p>
                    </div>
                    <div>
                        <p>RETAIL </p>
                        <p>18 Units</p>
                    </div>
                </div>
                <div className="pj-first-section-left-bottom">
                    <h2>RE-DEFINING
                        EXPERIENCES.</h2>
                </div>

            </div>
            <div className="pj-first-section-right">
                <div className="pj-first-section-right-top">
                    <h1>INTRODUCING A<br></br>
                        GREEN WAY OF LIVING.</h1>
                </div>
                <div className="pj-first-section-right-bottom">

                </div>
            </div>
        </div>
    )
}