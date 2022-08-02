import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assest/Image/home1.png';
import img2 from '../../Assest/Image/home2.png';
export const SecondContainer = () => {
    return (
        <div className='second-section'>
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