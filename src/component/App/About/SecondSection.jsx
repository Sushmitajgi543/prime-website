import React from 'react';

import vision from '../../Assest/Image/vision.png';
import mission from '../../Assest/Image/mission.png';

export const SecondSection = () => {
    return (
        <div className='abt-second-section'>
            <div className='abt-second-section-content'>
                <div className='abt-second-section-content1'>
                    <span>
                        <img src={vision} alt="" />
                    </span>
                    <h1>OUR VISION</h1>

                    <pre>Loyal and resilient. Implementing tech towards 
                        future for better living standards.</pre>
                    <p>We aspire to continually push the limits of
                        great finishing and craftsmanship.
                        </p>
                        <p>

                        We focus on offering you a better living,
                        we strive for continual progress in order
                        to establish ourselves as the most
                        trustworthy and reliable brand in real
                        estate while establishing the benchmark
                        of quality.</p>
                </div>


                <div>
                <span>
                        <img src={mission} alt="" />
                    </span>
                    <h1>OUR MISSION</h1>
                    <pre>You know you are at Prime when you get more than what you asked for.</pre>
                    <p>We build designs that improve
                        neighborhoods by utilizing high-quality
                        materials that provide homes a longer
                        and more sustainable life.
                        </p>
                        <p>
                        Our customer-oriented designs are
                        functional and are implemented utilizing
                        cutting-edge technology to enable
                        hassle-free living.</p>
                </div>
            </div>

        </div>
    );
}