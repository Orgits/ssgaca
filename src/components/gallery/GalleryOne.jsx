import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function GalleryOne() {
    return (
        <div>
            {/* start gallery section */}
            <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
                <div className="container">
                    <div className="row">
                        <div className="rts-title-area gallery text-start pl_sm--20">
                            <p className="pre-title">Our Work Portfolio</p>
                            <h2 className="title">Recent Success Stories</h2>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-12">
                            <div className="swiper mygallery mySwipers">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwipers"
                                    speed={1500}
                                    effect='fade'
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-01.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link to={'/project-details'}>
                                                        <h4 className="title">Corporate Tax Compliance</h4>
                                                    </Link>
                                                    <span>Financial Advisory, Compliance</span>
                                                    <p className="disc">
                                                        Assisted a multinational corporation in streamlining their tax structure, ensuring compliance with global tax regulations, and optimizing tax benefits.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        to={'/project-details'}
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-02.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link to={'/project-details'}>
                                                        <h4 className="title">Business Expansion Strategy</h4>
                                                    </Link>
                                                    <span>Growth & Advisory</span>
                                                    <p className="disc">
                                                        Developed an expansion strategy for a fast-growing enterprise, helping them establish subsidiaries in multiple countries while ensuring regulatory compliance.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        to={'/project-details'}
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="row g-5 w-g-100">
                                            <div className="col-lg-7">
                                                <div className="thumbnail-gallery">
                                                    <img
                                                        src="assets/images/gallery/gallery-03.jpg"
                                                        alt="business-images"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="bg-right-gallery">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/gallery/icon/01.svg"
                                                            alt="Business-gallery"
                                                        />
                                                    </div>
                                                    <Link to={'/project-details'}>
                                                        <h4 className="title">Startup Financial Structuring</h4>
                                                    </Link>
                                                    <span>Investment & Advisory</span>
                                                    <p className="disc">
                                                        Helped a startup secure funding and create a robust financial model, ensuring long-term sustainability and investor confidence.
                                                    </p>
                                                    <Link
                                                        className="rts-btn btn-primary"
                                                        to={'/project-details'}
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start gallery section */}
        </div>
    )
}

export default GalleryOne;