import {React,useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom';
import img1 from '../../Assest/Image/home1.png';
import img2 from '../../Assest/Image/home2.png';

export const SecondContainer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.second-section',
                start: 'center bottom'}
            })
            .fromTo(".second-section h1", {x:-300, opacity: 0},{
                x:0,opacity: 1, duration: 1.5, ease: 'power1.inOut'
            })
            .fromTo(".second-section p", {y:300, opacity: 0},{
                y:0,opacity: 1, duration: 0.5, ease: 'power1.inOut'
            },">=-0.5")
            .fromTo(".second-section h3", {y:300, opacity: 0},{
                y:0,opacity: 1, duration: 0.5, ease: 'power1.inOut'
            },"-=0.1")

    })
    return (
        <div  ref={t1} className='second-section'>
            <h1>Completed projects</h1>
            <div className='second-section-content'>
                <div className='second-section-content-1'>
                    <div>
                        <img src={img1} alt="" />

                    </div>
                    <p>Loft Gardens</p>
                    <h3>Your home in the
                        midst of nature</h3>
                    <Link to="/project">Explore More&nbsp; &rarr;</Link>
                </div>


                <div className='second-section-content-2'>
                    <div>
                        <img src={img2} alt="" />

                    </div>
                    <p>Prime Status</p>
                    <h3>Practically designed
                        for a better living</h3>
                    <Link to="/project">Explore More&nbsp; &rarr;</Link>
                </div>
            </div>

        </div>
    );
}