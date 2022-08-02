import React from 'react';
import tree from "../../Assest/Image/tree.jpg";
import quality from "../../Assest/Image/quality.png";
import trust from "../../Assest/Image/trust.png";
import commintment from "../../Assest/Image/commintment.png";
import excellence from "../../Assest/Image/excellence.png";
export const FourthSection = () => {
    return (
        <div className="fourth-section">
            <h1>OUR BENCHMARKS</h1>
            <section>

                <div className="fourth-section-left">

                    <div className="fourth-section-left-content">

                        <div className="fourth-section-left-content-item1">
                            <div className="fourth-section-left-content-item1-box1">
                                <div>
                                    <img src={quality} alt="" />

                                </div>
                                <h4>Quality</h4>
                                <p>Using the highest quality materials to ensure the
                                    longevity of your homes.</p>
                            </div>
                            <div className="fourth-section-left-content-item1-box2">
                                <div>
                                    <img src={trust} alt="" />

                                </div>
                                <h4>Trust</h4>
                                <p>Best use of the latest technology to provide a
                                    hassle-free lifestyle.</p>
                            </div>
                        </div>
                        <div className="fourth-section-left-content-item2">
                            <div className="fourth-section-left-content-item1-box1">
                                <div>
                                    <img src={commintment} alt="" />

                                </div>
                                <h4>Commitment</h4>
                                <p>Living the commitment, delivering the promises.
                                    With us, you always get more than you asked for.</p>
                            </div>
                            <div className="fourth-section-left-content-item1-box2">
                                <div>
                                    <img src={excellence} alt="" />

                                </div>
                                <h4>Excellence</h4>
                                <p>Our proven track record of delivery paired with
                                    innovative architecture has helped us gain the
                                    distinction of developer-par-excellence.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="fourth-section-right">
                    <div className="fourth-section-right-content">
                        {/* <img src={tree} alt="" /> */}
                    </div>
                </div>
            </section>

        </div>
    )
}