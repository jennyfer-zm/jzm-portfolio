import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Branding</p>
                        <h1>KAEC</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/single-project.jpg"} alt="image" />
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
                                <h3>KAEC</h3>
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
                            <p>KAEC Ramadan Experience was a seasonal branding project developed for King Abdullah Economic City (KAEC) to celebrate the spirit of Ramadan through a cohesive environmental design system. The project brought together signage, decorative graphics, and branded installations to create a unified visitor experience across the destination. From concept visuals to presentation, the designs reflected the cultural essence of Ramadan while maintaining a premium and contemporary aesthetic.</p>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/01.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/02.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/03.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/04.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/05.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/06.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/07.jpg"} alt="gallery" />
                        </div>
                    </div>
                      <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/kaec/08.jpg"} alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject