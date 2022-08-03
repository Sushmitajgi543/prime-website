import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import GoogleMapReact from 'google-map-react'
import { FaMailBulk, FaMobile, FaUserAlt, FaMapMarker } from "react-icons/fa";
export const ThirdSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.cnt-third-section',
                start: 'top center'
            }
        })
            
            .fromTo(".cnt-third-section h1", { x: -200, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
            })

            .fromTo(".cnt-third-section-left div",{ y: '100',opacity: 0 },
            {stagger:.7,  y: 10, opacity: 1, ease: 'back.out(1.9)',delay:0, duration: 1})
    })
    return (
        <div className="cnt-third-section">
            <div className="cnt-third-section-left">
                <h1>GET IN TOUCH
                    WITH US</h1>

                <div>
                    <span><FaMapMarker /></span>
                    <p>FP No. 121/2, Near Apple Green Bungalows, S.G. Highway, Chharodi, Ahmedabad- 382481.</p>
                </div>
                <div>
                    <span><FaMobile /></span>
                    <p>+91 95123 35511</p>
                </div>
                <div>
                    <span><FaMailBulk /></span>
                    <p>info@primedeveloper.group</p>
                </div>
                <div>
                    <span><FaUserAlt /></span>
                    <p>bipin@primedeveloper.group</p>
                </div>


            </div>
            <div className="cnt-third-section-right">
                {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat="37.42216"
                        lng="-122.08427"
                        text='1600 Amphitheatre Parkway, Mountain View, california.'
                    />
                </GoogleMapReact> */}
            </div>


        </div>
    )
}