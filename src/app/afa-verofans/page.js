import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>AI & Immersive Experiences</p>
                        <h1>AFA | Verofans</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/single-project.jpg"} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2026</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>AFA | Verofans</h3>
                            </div>
                            <div className="single-info">
                                 <p>Role</p>
                                <h3>Senior Graphic Designer</h3>
                            </div>
                            <div className="single-info">
                                <p>Tools</p>
                                <h3><p> Adobe Photoshop</p> <p>Adobe Illustrator</p> <p>Gemini</p><p>ChatGPT</p><p>Figma</p><p>Microsoft Powerpoint</p></h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Project Overview
                            </h2>
                            <p>AFA AI Fan Engagement is an immersive fan engagement platform developed by Verofax for the Argentine Football Association (AFA). The experience allows fans to interact with AI-powered activities, participate in gamified challenges, and unlock exclusive rewards such as signed jerseys, VIP experiences, match tickets, and official merchandise through a dedicated mobile application.</p>
                            <p> To extend the experience beyond the app, the platform was designed to integrate with interactive Holobox installations placed in high-traffic locations such as malls and airports, while being supported by a cohesive marketing campaign across digital channels, social media, and on-site promotional assets. Together, these touchpoints created a connected ecosystem for fan engagement while offering brands and sponsors innovative opportunities to connect with football fans.</p>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/01.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/02.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/03.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/04.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/05.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/06.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/07.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/afa-verofans/08.jpg"} alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject