import React from 'react';
// import GoogleMapReact from 'google-map-react'
import { FaMailBulk, FaMobile, FaUserAlt, FaMapMarker } from "react-icons/fa";
export const ThirdSection = () => {
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