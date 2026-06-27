'use client'
import React from 'react'
import Link from 'next/link';
import {  RiCircleFill, RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiTiktokFill, RiArrowRightLine, RiChat1Fill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>Jennyfer Zallouaa Mouawad</h2>
                                <p>Senior Graphic Designer</p>
                                <div className="about-social text-center">
                                   <ul>
    <li>
        <Link
            href="https://www.facebook.com/share/19BFMLU5oM/?mibextid=wwXIfr"
            target="_blank"
        >
            <RiFacebookCircleFill size={20} />
        </Link>
    </li>

    <li>
        <Link
            href="https://www.instagram.com/jennyfersdesigns/"
            target="_blank"
        >
            <RiInstagramLine size={20} />
        </Link>
    </li>

    <li>
        <Link
            href="www.linkedin.com/in/jennyfer-z-mouawad"
            target="_blank"
        >
            <RiLinkedinFill size={20} />
        </Link>
    </li>

    <li>
        <Link
            href="https://www.tiktok.com/@jennyfermoawad?_r=1&_t=ZS-97JXMZ6eE4a"
            target="_blank"
        >
            <RiTiktokFill size={20} />
        </Link>
    </li>
</ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Creative Artist & AI Expert!</p>
                                <h2>
                                    Bringing ideas to life through creativity, strategy, and innovative visual storytelling.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/about" className="theme-btn">View Profile ⭐ <i><RiArrowRightLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero