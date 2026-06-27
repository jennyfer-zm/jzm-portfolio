import React from 'react'
import Link from 'next/link'
import { RiChat1Fill, RiDownloadLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Let's Create Something Meaningful✨</h2>
                                <p>Whether you're building a brand, designing an AI-powered experience, or bringing a new digital product to life, I'd love to help turn your ideas into impactful visuals.
</p>
<p> I'm available for freelance projects, collaborations, and full-time opportunities.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Let's Connect!  <i><RiChat1Fill size={16} /></i></Link>
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

export default CallToAction