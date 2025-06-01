import React from 'react'
import HeaderOne from "../components/header/HeaderFour";
import Breadcrumb from "./Breadcrumb";
import ServiceTen from "../components/service/ServiceTen";
import FaqTwo from "../components/faq/FaqTwo";
import PricingThree from "../components/pricing/PricingThree";
import BlogThree from "../components/blog/BlogThree";
import ContactForm from "../components/contactform/ContactForm";

// import FooterOne from "../components/footer/FooterOne";
import FooterFour from '../components/footer/FooterFive';

function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Service' }
    ];
    return (
        <div className=''>

            <HeaderOne />
            <Breadcrumb title="Our Service" breadcrumbs={breadcrumbs} />
            <ServiceTen />
            {/* <FaqTwo /> */}
            {/* <PricingThree /> */}
            <ContactForm />
            <BlogThree />
     
            <FooterFour />

        </div>
    )
}

export default OurService