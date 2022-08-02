import React from 'react';
import { Link } from 'react-router-dom';

export const ThirdSection = () => {
    return (
        <div className="third-section">
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