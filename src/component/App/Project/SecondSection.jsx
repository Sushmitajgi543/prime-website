import React from 'react';
import img1 from '../../Assest/Image/pimg2.png';
import img2 from '../../Assest/Image/pimg1.png';
import img3 from '../../Assest/Image/pimg3.png';

export const SecondSection = () => {
    return (
        <div className="pj-second-section">
            <div className="pj-second-section-left">
                <div className="pj-second-section-left-top">
                    <h1>YOUR HOME IN THE
                        MIDST OF NATURE</h1>
                </div>
                <div className="pj-second-section-left-middle">
                <div className="pj-second-section-left-middle-left">
                       
                    </div>
                    <div className="pj-second-section-left-middle-right">
                        <p>Loft gardens reshape & redefine living since 2017. It is an amalgamation
                            of upscale housing with nature. Our loft gardens are more than just
                            houses, they are a work of art. As an extension of its living and eating
                            space, each unit is allotted a loft garden, making the house sumptuous
                            and luxuriant.</p>
                    </div>
                </div>
                <div className="pj-second-section-left-bottom">
                    <img src={img3} alt="" />
                </div>

            </div>
            <div className="pj-second-section-right">
                <div className="pj-second-section-right-top">
                    <img src={img2} alt="" />
                    </div>
                <div className="pj-second-section-right-bottom">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}