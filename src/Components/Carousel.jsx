import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={`${process.env.REACT_APP_API_KEY}assests/slide-1.jpg`} alt="slide-1.jpg"
                        className="d-block carsoul-image"
                    />
                    
                    <div className="carousel-caption d-none d-md-block">
                        <div className="card" style={{ width: '420px' }}>
                            <div className="p-4 text-start text-carousel-content">
                                <h4>A Family Health Solution For</h4>
                                <h2><span style={{ color: "#649348" }}>Sugar Management</span></h2>
                                <div class="flex-btn">
                                    <span>View Products</span>
                                    <span>Contact Us</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="or_circle">or</div>
                                    <div className="red mx-3">
                                        <img src={`${process.env.REACT_APP_API_KEY}assests/arrow-black.png`}
                                            alt="arrow" width={'70px'}
                                        />
                                    </div>
                                    <div className="call_type d-flex">
                                        <Link className='nav-link' href="tel:+91.120.4671000">
                                            <span className='d-flex'>
                                                Call to Bhargava Phytolab
                                            </span>
                                            +91.120.4671000
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Carousel