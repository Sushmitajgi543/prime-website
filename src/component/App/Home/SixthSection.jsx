import React from 'react';
import quotation from '../../Assest/Image/quotation.png';

export const SixthSection = () => {
    return (

        <div className='sixth-section'>
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