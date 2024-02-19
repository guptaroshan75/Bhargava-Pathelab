import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <section style={{ backgroundColor: '#f8f8f8' }} className='pb-5'>
            <div className='container p-0'>
                <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 mb-sm-0">
                        <div className="card card-gallery pt-4 first-card shadow">
                            <div className='card-body text-card-inner'>
                                <h2 className='mb-4'>
                                    <div> We aspire to provide  </div>
                                    <span style={{ color: '#7cb15d' }} className='me-2'>
                                        innovative products
                                    </span>
                                    for millions…
                                </h2>
                                <p>
                                    From humble beginnings in the year 1920 to crossing over
                                    a century successfully, our objective is to make a
                                    difference in lives of millions of people within and
                                    beyond India and achieve a healthy world.
                                </p>
                                <div className='card-about-more mt-4'>
                                    <Link className='about-more nav-link'>
                                        About More
                                        <span className='arrow-container'>
                                            <RiArrowRightSLine className='arrow-icon' />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 mb-sm-0">
                        <div className="card card-gallery pt-4 shadow">
                            <div className='card-body text-card-inner'>
                                <Link className="nav-link">
                                    <img src={`${process.env.REACT_APP_API_KEY}assests/oru-vision.jpg`} 
                                        className='card-img-gallery'
                                        alt='oru-vision.jpg'
                                    />
                                </Link>
                                <h6 className='my-3'> Our Vision </h6>
                                <h2 className='fs-2 mb-3 other-card'>
                                    Global & Affordable Medicines
                                </h2>
                                <p>
                                    To be the fastest growing homeopathic company globally by
                                    2025 by offering clinically researched & high-quality
                                    natural products at affordable prices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 mb-sm-0">
                        <div className="card card-gallery pt-4 shadow">
                            <div className='card-body text-card-inner'>
                                <Link className="nav-link">
                                    <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/our-mission.webp`}
                                        className='card-img-gallery'
                                        alt='our-mission.webp'
                                    />
                                </Link>
                                <h6 className='my-3'> Our Mission </h6>
                                <h2 className='fs-2 mb-3 other-card'>
                                    Sustainable & Accessible Products for Millions
                                </h2>
                                <p>
                                    To increase the life expectancy of people globally through
                                    natural preparations. Enable high end technology,
                                    innovation & reach milieu of patients worldwide through
                                    sustainable, affordable & accessible products and create
                                    a healthy environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage