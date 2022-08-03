import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FourthSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.abt-fourth-section',
                start: 'top center'
            }
        })
            
            .fromTo(".h1", { x: -200, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
            })

            .fromTo(".star",{ y: '100',opacity: 0 },
            {stagger:.7,  y: 10, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
    })
    return (
        <div className='abt-fourth-section'>
            <h1 className='h1'>OUR GOALS</h1>
            <div className='abt-fourth-section-content'>
                <div className='abt-fourth-section-content-left'>
                 <div></div>
                </div>
                <div className='abt-fourth-section-content-middle'>
                    <div className='abt-fourth-section-content-middle-1  star'>
                        <span>01</span>
                        <div>
                            <h1>LISTEN</h1>
                            <p>Listen to our customers, talk with
honesty and be open to new ideas.</p>
                        </div>
                    </div>
                    <div className='abt-fourth-section-content-middle-2  star'>
                    <span>02</span>
                        <div>
                            <h1>BE HONEST</h1>
                            <p>Offer the best advice backed by proper
experience and industry credentials.</p>
                        </div>
                    </div>
                    <div className='abt-fourth-section-content-middle-3  star'>
                    <span>03</span>
                        <div>
                            <h1>SERVICE</h1>
                            <p>We offer a true end-to-end product, using
dedicated managers to look after one
project from start to finish.</p>
                        </div>
                    </div>
                    <div className='abt-fourth-section-content-middle-4  star'>
                    <span>04</span>
                        <div>
                            <h1>MAINTAIN</h1>
                            <p>Maintain all our goals, maintain all our
products and maintain our relationships
with clients for life.</p>
                        </div>
                    </div>
                </div>
                <div className='abt-fourth-section-content-right'>

                </div>
            </div>

        </div>
    )
}