import React from 'react';
// import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import HeaderOne from "../components/header/HeaderOne";
import post from '../data/post.json';

import Breadcrumb from "./Breadcrumb";
import BlogListMain from './BlogListMain';
import FooterFour from '../components/footer/FooterFour';


function BlogGrid() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Latest Posts' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Latest Posts" breadcrumbs={breadcrumbs} />

            {/* rts blog grid area */}
            <div className="rts-blog-grid-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
                            <div className="row g-5">

                                {post.map((data, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="blog-grid-inner">
                                                {
                                                    <BlogListMain
                                                        blogCategory={data.category}
                                                        blogID={data.id}
                                                        blogImage={`${data.image}`}
                                                        authorImg={`${data.authorImg}`}
                                                        blogTitle={data.title}
                                                        blogAuthor={data.author}
                                                        blogPublishedDate={data.publishedDate}
                                                    />
                                                }
                                            </div>

                                        </div>
                                    )
                                }).slice(4, 8)}

                            </div>
                            {/* pagination area */}
                            <div className="row mt--30">
                                <div className="col-12">
                                    <div className="text-center">
                                        <div className="pagination">
                                            <button className="active">01</button>
                                            <button>02</button>
                                            <button>03</button>
                                            <button>04</button>
                                            <button> 
                                                <i className="fal fa-angle-double-right" />
                                            </button>
                                        </div><p>“Slider inactive due to insufficient blogs.”</p>
                                    </div>
                                </div>
                            </div>
                            {/* pagination area End */}
                        </div>
                        {/*rts blog wized area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">
                            {/* single wized start */}
                            
                            {/* single wized End */}
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                   
                                  
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wized End */}
                            {/* single wized start */}
                           <div className="rts-single-wized Categories">
                                <div className="wized-header">
                                    <h5 className="title">Categories</h5>
                                </div>
                                <div className="wized-body">
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Business Solution <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                   
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Feature Product
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                    {/* single categoris */}
                                    <ul className="single-categories">
                                        <li>
                                            <Link to={'#'}>
                                                Catagory Thury
                                                <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* single categoris End */}
                                </div>
                            </div> 
                            
                            {/* single wized start */}
                            
                            {/* single wized End */}
                            {/* single wized start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link href="index.html">
                                        <img src="assets/images/logo/logo.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" to="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {/* single wized End */}
                        </div>
                        {/* rts- blog wized end area */}
                    </div>
                </div>
            </div>
            {/* rts blog grid area end */}

            <FooterFour />

        </div>
    )
}

export default BlogGrid