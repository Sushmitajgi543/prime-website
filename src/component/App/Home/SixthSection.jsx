import {React,useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import quotation from '../../Assest/Image/quotation.png';

export const SixthSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.sixth-section',
                start: 'center bottom'}
            })
            .fromTo(".sixth-section h1", {x:-300, opacity: 0},{
                x:0,opacity: 1, duration: 1.5, ease: 'power1.inOut'
            })
            
            .fromTo(".sixth-section-content div ",{ y: '50',opacity: 0 },
            {stagger:.3,  y: 10, opacity: 1, ease: 'back.out(1.7)',delay:0, duration: 1});

    })

    return (

        <div ref={t1}  className='sixth-section'>
            <h1>TESTIMONIALS</h1>
            <div className='sixth-section-content'>
                <div className='sixth-section-content-left'>
                    <span>
                        <img src={quotation} alt="" />
                    </span>
                    <div>
                        <h3>Lorem ipsum dolor sit amet, adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore
                            magna</h3>
                        <p>Lorem Ipsum, Lorem Ipsum Dolor</p>
                    </div>


                </div>


                <div className='sixth-section-content-right'>
                    <span><img src={quotation} alt="" /></span>
                    <div>
                        <h3>Lorem ipsum dolor sit amet, adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore
                            magna</h3>
                        <p>Lorem Ipsum, Lorem Ipsum Dolor</p>
                    </div>



                </div>
            </div>

        </div>
    );
}