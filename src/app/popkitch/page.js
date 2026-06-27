import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Branding</p>
                        <h1>Industrial Valley</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/single-project.jpg"} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2019</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Industrial Valley</h3>
                            </div>
                            <div className="single-info">
                                 <p>Role</p>
                                <h3>Graphic Designer</h3>
                            </div>
                            <div className="single-info">
                                <p>Tools</p>
                                <h3><p> Adobe Photoshop</p> <p>Adobe Illustrator</p><p>Adobe InDesign</p></h3>
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
                            <p>Popkitch Egypt is a Smart Kitchen Operating System (SKOS) that redefines food preparation and delivery through a centralized kitchen model, serving both institutional and private clients. Built to modernize the traditional restaurant and catering industry, Popkitch combines operational efficiency with a customer-focused food experience. This project focused on creating engaging Instagram content that showcased the brand's diverse menu offerings, promoted campaigns, and strengthened its digital presence through visually compelling, appetite-driven social media designs.</p>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/01.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/02.jpg"} alt="gallery" />
                        </div>
                        </div>
                 <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/03.jpg"} alt="gallery" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/04.jpg"} alt="gallery" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/05.jpg"} alt="gallery" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/06.jpg"} alt="gallery" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/07.jpg"} alt="gallery" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/industrial-valley/08.jpg"} alt="gallery" />
                        </div>

                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject