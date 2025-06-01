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
                                        <p className="office"> D-2, Pocket 2 , Sector 11, Rohini, Delhi, New Delhi, Delhi 110085</p>
                                    </div>
                                </div>
                            </div>
                            {/* map area right */}
                        </div>
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5943234590477!2d77.10725207528112!3d28.731667375610712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013694652203%3A0x4fb2ab89e8996c72!2sSahil%20Goyal%20%26%20Co!5e0!3m2!1sen!2sin!4v1748806475892!5m2!1sen!2sin"
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