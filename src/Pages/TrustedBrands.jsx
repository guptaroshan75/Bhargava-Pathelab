import React from 'react';

const TrustedBrands = () => {
    return (
        <section className='container p-0 mt-5'>
            <div className='mb-4'>
                <div className='d-flex justify-content-between mb-5'>
                    <div className='trust-brands postion-relative'>
                        <h2>
                            Top <span style={{ color: 'rgb(124, 177, 93)' }}> Trusted </span>
                            Brands
                        </h2>
                    </div>
                    <div className='trust-brands'>
                        <h6> View All </h6>
                    </div>
                </div>

                <div className='container mt-5'>
                    <div className="row d-flex justify-content-between align-items-end">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                    <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-1.jpg`}
                                        alt="brand-1.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-2.jpg`}
                                        alt="brand-2.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-3.jpg`}
                                        alt="brand-3.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-4.jpg`}
                                        alt="brand-4.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-5.jpg`} 
                                        alt="brand-5.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-6.jpg`}
                                        alt="brand-6.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-7.jpg`}
                                        alt="brand-7.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card mb-4 rounded-0 trusted-card">
                                <div className='trusted-title'>
                                <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/brand-8.jpg`}
                                        alt="brand-8.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedBrands