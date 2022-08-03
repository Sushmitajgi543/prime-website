import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gym from '../../Assest/Image/gym.png';
import lounge from '../../Assest/Image/lounge.png';
import play from '../../Assest/Image/play.png';
import gazebo from '../../Assest/Image/gazebo.png';
import plaza from '../../Assest/Image/plaza.png';
import threater from '../../Assest/Image/threater.png';
export const ThirdSection = () => {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.pj-third-section',
                start: 'center bottom'
            }
        })
            .fromTo(".pj-third-section h1", { x: -300, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1.5, ease: 'power1.inOut'
            })

            .fromTo(".pj-third-section-middle-container div ",{ y: '50',opacity: 0 },
            {stagger:.3,  y: 10, opacity: 1, ease: 'back.out(1.7)',delay:0, duration: 1});
    })
    return (
        <div className='pj-third-section'>
            <div className='pj-third-section-left'>
                <div></div>
            </div>
            <div className='pj-third-section-middle'>
                <h1>Stunning Luxury Amenities, Designed For Life</h1>
                <div className='pj-third-section-middle-container'>
                    <div><span><img src={plaza} /></span> <h1>Central Plaza</h1></div>
                    <div><span><img src={gazebo} /></span> <h1>Gazebo</h1></div>
                    <div><span><img src={play} /></span> <h1>Kids Play Area + Multipurpose Play Court</h1></div>
                </div>
                <div className='pj-third-section-middle-container'>
                    <div><span><img src={threater} /></span> <h1>Home Theater</h1></div>
                    <div><span><img src={lounge} /></span> <h1>Lounge</h1></div>
                    <div><span><img src={gym} /></span> <h1>Gym</h1></div>
                </div>
            </div>

            <div className='pj-third-section-right'>
            <div></div>
            </div>
        </div>
    )
}