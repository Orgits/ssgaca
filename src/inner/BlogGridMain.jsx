import React from 'react';
import { Link } from 'react-router-dom';
import postData from '../data/post.json'; // ✅ Importing blog post data

const BlogGridMain = () => {
    // ✅ Display only the first 4 blogs
    const blogsToShow = postData.slice(0, 4);

    return (
        <div className="row">
            {blogsToShow.map((blog) => (
                <div key={blog.id} className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog-listing">
                        {/* Thumbnail image dynamic */}
                        <div className="thumbnail">
                            <img src={`assets/images/blog/${blog.bannerImg}`} alt={blog.title} />
                        </div>
                        <div className="blog-listing-content">
                            <div className="user-info">
                                {/* Single info */}
                                <div className="single">
                                    <i className="far fa-user-circle" />
                                    <span>By Admin</span>
                                </div>
                                {/* Single info */}
                                <div className="single">
                                    <i className="far fa-clock" />
                                    <span>{blog.publishedDate || 'Unknown Date'}</span>
                                </div>
                                {/* Single info */}
                                <div className="single">
                                    <i className="far fa-tags" />
                                    <span>{blog.category || 'Uncategorized'}</span>
                                </div>
                            </div>
                            <h3 className="title">
                                <Link className='blog-title' to={`/blog/${blog.id}`}>
                                    {blog.title}
                                </Link>
                            </h3>
                            <p className="disc">
                                {blog.descripTion}
                            </p>
                            <Link className="rts-btn btn-primary" to={`/blog/${blog.id}`}>
                                Read Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogGridMain;