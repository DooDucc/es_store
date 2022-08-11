/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Place, Email, LocalPhone, Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';

import './Footer.scss';
import spon1 from '../../assets/images/spon1.png';
import spon2 from '../../assets/images/spon2.png';
import secure from '../../assets/images/secure.png';
import secure1 from '../../assets/images/spon2.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="content">
                    <div className="contentBox">
                        <h2>Get in touch</h2>
                        <Link to="/" className="link">
                            <Place /> <span>123E Store, Los Angeles, USA</span>
                        </Link>
                        <Link to="/" className="link">
                            <Email />
                            <span>estore@gmail.com</span>
                        </Link>
                        <Link to="/" className="link">
                            <LocalPhone />
                            <span>+123-456-789</span>
                        </Link>
                    </div>
                    <div className="contentBox">
                        <h2>Follow Us</h2>
                        <div className="icons">
                            <Link to="/" className="link">
                                <Twitter />
                            </Link>
                            <Link to="/" className="link">
                                <Instagram />
                            </Link>
                            <Link to="/" className="link">
                                <Facebook />
                            </Link>
                            <Link to="/" className="link">
                                <YouTube />
                            </Link>
                        </div>
                    </div>
                    <div className="contentBox">
                        <h2>Company Info</h2>
                        <Link to="/" className="link">
                            &gt; About us
                        </Link>
                        <Link to="/" className="link">
                            &gt; Private Policy
                        </Link>
                        <Link to="/" className="link">
                            &gt; Term &amp; Condition
                        </Link>
                    </div>
                    <div className="contentBox">
                        <h2>Purchase Info</h2>
                        <Link to="/" className="link">
                            &gt; Payment Policy
                        </Link>
                        <Link to="/" className="link">
                            &gt; Shipping Policy
                        </Link>
                        <Link to="/" className="link">
                            &gt; Return Policy
                        </Link>
                    </div>
                </div>
                <div className="sponsor">
                    <div className="accept">
                        <span>We accept: </span>
                        <img src={spon1} />
                        <img src={spon2} />
                    </div>
                    <div className="secure">
                        <span>Secured by: </span>
                        <img src={secure} />
                        <img src={secure1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
