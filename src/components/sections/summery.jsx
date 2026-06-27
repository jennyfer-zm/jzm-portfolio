import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from "next/link";

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                   Hey! It's Jen!
                                </h2>
                                <p> I'm a Senior Graphic Designer passionate about turning ideas into meaningful visual experiences.</p>
                                <p> My journey has taken me through branding, AI-powered solutions, digital products, immersive Holobox experiences, presentations, websites, and marketing campaigns for startups, agencies, and global brands. I love taking complex ideas and transforming them into designs that are clean, engaging, and memorable.</p>
                                <p> I'm always exploring new ways to blend creativity with technology. Whether I'm building a brand identity, designing a digital experience, creating a pitch deck, or experimenting with AI-generated visuals, I enjoy bringing ideas to life with purpose and attention to every detail. </p>
                                <p> For me, great design isn't just about how it looks, it's about how it communicates, solves problems, and leaves a lasting impression.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">
    Let's Connect
    <i><RiMailSendLine size={16} /></i>
</Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery