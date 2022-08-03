import {React,useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

export const ThirdSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.second-section',
                start: 'bottom bottom'}
            })
            .fromTo(".third-section h1", {x:-300, opacity: 0},{
                x:0,opacity: 1, duration: 1.5, ease: 'power1.inOut'
            })
            
            .fromTo(".third-section h3", {x:300, opacity: 0},{
                x:0,opacity: 1, duration: 0.5, ease: 'power1.inOut'
            },"-=0.1")

    })

    return (
        <div ref={t1} className="third-section">
            <div className="third-section-container">
                <div className="third-section-container-left">
                    <h1>ABOUT US . </h1>
                </div>
                <div className="third-section-container-right">
                    <h3>Trustworthy, reliable & passionate
about quality. We are guided by the
conviction that our customers must
be happy and satisfied.</h3>
<Link to="/about-us">Explore More&nbsp; &rarr;</Link>
                </div>
            </div>
        </div>
    )
}