import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2021 - Present'} title={'Senior Graphic Designer'} institution={'Verofax Limited '} />
                                    <Card year={'2020 - 2021'} title={'Graphic Designer'} institution={'Verofax Limited'} />
                                    <Card year={'2019 - Present'} title={'Freelance Graphic Designer'} institution={'jennyfersdesigns'} />
                                    <Card year={'2019'} title={'Graphic Designer'} institution={'Douze Degrés Agency'} />
                                    <Card year={'2018 - 2019'} title={'Graphic Designer Intern'} institution={'Hallab 1881 S.A.L'} />
                                    <Card year={'2017'} title={'Graphic Designer Intern'} institution={'Douze Degrés Agency'} />


                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2015 - 2018'} title={'Bachelor in Graphic Design & Visual Communication'} institution={'Lebanese University, Faculty of Fine Arts'} />
                                    <Card year={'2014 - 2015'} title={'Sociology and Economics'} institution={'College de la Salle, Kfaryachite'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}