import React from 'react';
import projectImg from '../../Assest/Image/project-img.png';
export const FirstSection = () => {
    return (

        <div className="pj-first-section">
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