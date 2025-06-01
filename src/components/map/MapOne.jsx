import React from 'react'
import { Link } from 'react-router-dom';
function MapOne() {
    return (
        <div>
            {/* map area start */}
            <div className="rts-map-area bg-light-white" id='address'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* map area left */}
                            <div className="mapdetails-inner-one">
                                <div className="left-area single-wized">
                                    <h5 className="title">Get in touch</h5>
                                    <div className="details">
                                        <p>Write to Us</p>
                                        <Link className="number" to={'#'}>
                                        info@ssgca.com
                                        </Link>
                                        <p className="time-header">Working hours:</p>
                                        <p className="time">
                                            Monday – Saturday <br /> 10AM to 6PM EST
                                        </p>
                                    </div>
                                </div>
                                <div className="right-area single-wized">
                                    <h5 className="title">Post Address</h5>
                                    <div className="details">
                                       
                                        <p className="headoffice">Head Office</p>
                                        <p className="office">D-2 Rohini Sector 11 New Delhi 110070</p>
                                    </div>
                                </div>
                            </div>
                            {/* map area right */}
                        </div>
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.055021879864!2d77.2215868!3d28.628113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd09dccf044f%3A0x527a2d401853b004!2sHimalaya%20house%20Cp!5e0!3m2!1sen!2sin!4v1740731893913!5m2!1sen!2sin"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* map area end */}
        </div>
    )
}

export default MapOne