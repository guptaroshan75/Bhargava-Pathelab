import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllCardCarousel } from '../redux/features/card_Carousel_Slice';

const Carousel = () => {
    const dispatch = useDispatch();
    const { mobileSlider } = useSelector(state => state.sliders);

    useEffect(() => {
        dispatch(getAllCardCarousel())
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">

                </button>
                <button type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1" aria-label="Slide 2">
                </button>
                <button type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2" aria-label="Slide 3">
                </button>
            </div>

            {mobileSlider?.map((slider) => (
                <div className="carousel-inner" key={slider?.id}>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="../assests/slide-1.jpg" alt="slide-1.jpg"
                            className="d-block carsoul-image"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="card" style={{ width: '420px' }}>
                                <div className="p-4 text-start text-carousel-content">
                                    <div dangerouslySetInnerHTML={{
                                        __html: slider?.content?.rendered
                                    }}
                                    />
                                    <div className="d-flex align-items-center">
                                        <div className="or_circle">or</div>
                                        <div className="red mx-3">
                                            <img src="../assests/arrow-black.png"
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
            ))}

            <button className="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleDark" data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button"
                data-bs-target="#carouselExampleDark" data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default Carousel