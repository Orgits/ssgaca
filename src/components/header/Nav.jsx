import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                <li><Link className="nav-item" to={'/'}>
                            Home
                        </Link>
                        </li>
                    <li >
                        <Link className="nav-item" to={'/about-us'}>
                            About Us
                        </Link>
                           </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" to={'/our-service'}>
                            Services
                        </Link>
                        <ul className="submenu menu-link">
                            <li className="menu-item">
                                <Link className="tag" to={'#'}>
                                    Pages
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/appoinment'}>Appoinment</Link>
                                    </li>
                                    <li>
                                        <Link to={'/about-us'}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/pricing-plane'}>Price Plans</Link>
                                    </li>
                                    <li>
                                        <Link to={'/our-service'}>Our Services</Link>
                                    </li>
                                    <li>
                                        <Link to={'/testimonial-style-1'}>Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link to={'/404'}>404 Page</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" to={'#'}>
                                    Portfolio
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/project'}>Portfolio Style 1</Link>
                                    </li>
                                    <li>
                                        <Link to={'/portfolio-style-2'}>
                                            Portfolio Style 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/portfolio-style-3'}>
                                            Portfolio Style 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/portfolio-style-4'}>
                                            Portfolio Style 4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/portfolio-style-5'}>
                                            Portfolio Style 5
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/project-details'}>Portfolio Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" to={'#'}>
                                    Our Teams
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/team'}>Team Style 1</Link>
                                    </li>
                                    <li>
                                        <Link to={'/team-style-2'}>Team Style 2</Link>
                                    </li>
                                    <li>
                                        <Link to={'/team-style-3'}>Team Style 3</Link>
                                    </li>
                                    <li>
                                        <Link to={'/team-style-4'}>Team Style 4</Link>
                                    </li>
                                    <li>
                                        <Link to={'/team-style-5'}>Team Style 5</Link>
                                    </li>
                                    <li>
                                        <Link to={'/team-details'}>Team Details</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <Link className="nav-item" to={'/blog-grid'}>
                            Blog
                        </Link>
                        
                    </li>
                    {/* <li >
                        <Link className="nav-item" to={'/pricing-plane'}>
                            Pricing Plane
                        </Link>
                    </li> */}
                    <li>
                        <Link className="nav-item" to={'/contactus'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav