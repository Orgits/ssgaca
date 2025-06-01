import React from 'react'
import { Link } from 'react-router-dom';

function BannerFour() {
    return (
        <div>
            {/* banner area start three */}
            <div className="rts-banner-area banner-three banner-four bg_image" id='banner'>
               
                <div className="shape1">
                    <img src="assets/images/banner/shape/06.png" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="assets/images/banner/shape/06.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="assets/images/banner/shape/07.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="assets/images/banner/shape/08.png" alt="shape" />
                </div>
                <div className=" bg_banner-three bg_banner-four bg_image rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-three-inner banner-four-inner">
                                    <span className="subtitle-banner" style={{ color: 'var(--color-white)' }}>
                                        START GROWING YOUR BUSINESS TODAY
                                    </span>
                                    {/* type headline start*/}
                                    <h1 className="title cd-headline clip is-full-width" style={{ color: 'var(--color-white)' }}>
                                        Plan for the future <br />  Plan for the Business
                                    </h1>
                                    <p className="disc" style={{ color: 'var(--color-white)' }}>
                                        We are a team of professionals who are dedicated to helping you achieve your business goals. Our expertise in accounting, taxation, and business advisory services will help you navigate the complexities of the financial world with ease.
                                    </p>
                                    <div className="button-group">
                                        <Link
                                            to={'/contactus'}
                                            className="rts-btn btn-primary-3 btn-primary-4"
                                        >
                                            Get In Touch
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end three */}
        </div>
    )
}

export default BannerFour