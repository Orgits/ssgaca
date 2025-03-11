import React from 'react';
import { Link } from 'react-router-dom';

function ServiceOne() {
    return (
        <div>
            <>
                {/* rts service post area Start */}
                <div className="rts-service-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">Our Services</p>
                                    <h2 className="title">Comprehensive Business & Financial Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {/* Service 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner one">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/01.svg" alt="Audit & Assurance" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/'}>
                                            <h5 className="title">Audit & Assurance</h5>
                                        </Link>
                                        <p className="disc">
                                            Ensure financial accuracy and compliance with our expert audit services.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner two">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/02.svg" alt="Taxation Services" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details'}>
                                            <h5 className="title">Taxation Services</h5>
                                        </Link>
                                        <p className="disc">
                                            Expert solutions for corporate and individual tax compliance and planning.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner three">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/03.svg" alt="Corporate Law & Compliance" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/'}>
                                            <h5 className="title">Corporate Law & Compliance</h5>
                                        </Link>
                                        <p className="disc">
                                            Legal advisory and compliance solutions for businesses of all sizes.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/04.svg" alt="Business Advisory" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/'}>
                                            <h5 className="title">Business Advisory</h5>
                                        </Link>
                                        <p className="disc">
                                            Strategic consulting for business expansion, growth, and sustainability.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 5 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner five">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/05.svg" alt="FEMA & International Taxation" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/5'}>
                                            <h5 className="title">FEMA & International Taxation</h5>
                                        </Link>
                                        <p className="disc">
                                            Cross-border taxation and FEMA compliance for global businesses.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/5'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 6 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner six">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/06.svg" alt="Startup & MSME Support" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/6'}>
                                            <h5 className="title">Startup & MSME Support</h5>
                                        </Link>
                                        <p className="disc">
                                            Guidance and support for startups and MSMEs in legal and financial matters.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/6'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="row">
                            <div className="cta-one-bg col-12">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">
                                            Let's discuss how we can enhance your business success.
                                        </h3>
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" to="/contactus">
                                            Let's Work Together
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts service post area End */}
            </>
        </div>
    );
}

export default ServiceOne;