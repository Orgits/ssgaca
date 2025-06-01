
import React from 'react';
import HeaderOne from "../components/header/HeaderFour";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";
import FooterFour from '../components/footer/FooterFive';

function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span><br />
                                        <Link to={'tel:+91 99538 56288'}>
                                            <h7><b>+91 99538 56288</b></h7><br />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                       
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/03.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Walk In</span><br />
                                        <Link to={'#'}>
                                        <h8><b> D-2, Pocket 2 , Sector 11, Rohini, Delhi, New Delhi, Delhi 110085</b></h8>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                         {/* single contact area */}
                         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Write to Us</span><br />
                                        <Link to={'mailto:someone@example.com'}>
                                            <h7><b>info@ssgca.com</b></h7>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5943234590477!2d77.10725207528112!3d28.731667375610712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013694652203%3A0x4fb2ab89e8996c72!2sSahil%20Goyal%20%26%20Co!5e0!3m2!1sen!2sin!4v1748806475892!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <img
                                    className="location"
                                    src=""
                                    alt="Business_map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* conact us form fluid end */}

            <FooterFour />

        </div>
    )
}

export default ContactUs