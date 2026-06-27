import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Branding</p>
                        <h1>Azalea</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/single-project.jpg"} alt="image" />
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
                                <h3>Azalea</h3>
                            </div>
                            <div className="single-info">
                                 <p>Role</p>
                                <h3>Graphic Designer</h3>
                            </div>
                            <div className="single-info">
                                <p>Tools</p>
                                <h3><p> Adobe Photoshop</p> <p>Adobe Illustrator</p> <p>Adobe InDesign</p></h3>
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
                            <p>Azalea is a brand guidelines project focused on transforming an established visual identity into a comprehensive and production-ready brand system. Building on the existing brand direction, the project consolidated design standards, visual assets, and branded applications into a structured guideline document while showcasing the identity across a range of realistic mockups and marketing materials. The result was a cohesive brand manual that ensures consistency across digital and print communications.</p>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/01.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/02.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/03.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/04.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/05.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/06.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/07.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/azalea/08.jpg"} alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject