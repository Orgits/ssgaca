import React from 'react';

function Feature() {
    return (
        <div>
            {/* rts features area start */}
            <div className="rts-feature-area rts-section-gap">
                <div className="container-fluid padding-controler plr--120">
                    <div className="row bg-white-feature pt--120 pb--120">
                        <div className="col-xl-6 col-lg-12">
                            <div className="feature-left-area">
                                <img src="assets/images/feature/01.png" alt="LDR Groups Feature" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                                <p className="pre-title">Transform Your Business with Us</p>
                                <h2 className="title feature-title">
                                    Your Trusted Partner in <br />
                                    Business Growth & Compliance
                                </h2>
                                <span>
                                    At <b>LDR Groups,</b> we provide strategic financial and legal consulting to help businesses thrive. 
                                    Our expert-driven solutions ensure compliance, streamline operations, and enhance profitability. With a commitment to excellence, we empower enterprises to navigate complex regulatory landscapes with confidence.
                                </span>
                            </div>
                            <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Accelerated Business Growth</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Round-the-Clock Client Support</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Industry-Leading Experts</p>
                                </div>
                                <div className="single-feature-one">
                                    <i className="fal fa-check" />
                                    <p>Tailored Financial & Compliance Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts features area end */}
        </div>
    )
}

export default Feature;