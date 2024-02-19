import React, { useEffect, useState } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { AiFillStar, AiTwotoneHeart } from 'react-icons/ai';
import { PiTestTubeFill } from 'react-icons/pi';
import { TfiBag } from 'react-icons/tfi';
import { BsGlobe } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTestimonials } from '../redux/features/testimonials_Slice';

const style = {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
};

const Testimonials = () => {
    const [isExpanded, setExpanded] = useState(false);
    const dispatch = useDispatch();
    const { isLoading, testimonials } = useSelector(state => state.testimonials);

    useEffect(() => {
        dispatch(getAllTestimonials())
        window.scrollTo(0, 0);
    }, [dispatch])


    const handleExpand = (id) => {
        setExpanded(id === isExpanded ? null : id);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='container p-0'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0 p-0'>
                        <div className='icon-background'>
                            <TfiBag className='icon-trust ' />
                        </div>
                        <div className='parent-icon-content'>
                            <p className='text-center'> 100 </p>
                            <span className='text-center'> Years of Experience </span>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0 p-0'>
                        <div className='icon-background'>
                            <BsGlobe className='icon-trust ' />
                        </div>
                        <div className='parent-icon-content'>
                            <p className='text-center'> 60 </p>
                            <span className='text-center'> Presence in Countries </span>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0 p-0'>
                        <div className='icon-background'>
                            <IoCheckmarkCircleOutline className='icon-trust ' />
                        </div>
                        <div className='parent-icon-content'>
                            <p className='text-center'> 17 </p>
                            <span className='text-center'> Approved By MOH </span>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0 p-0'>
                        <div className='icon-background'>
                            <PiTestTubeFill className='icon-trust ' />
                        </div>
                        <div className='parent-icon-content'>
                            <p className='text-center'> 350 </p>
                            <span className='text-center'> Marketed Formulation </span>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ backgroundColor: '#f8f8f8' }}>
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-3"
                        style={{ color: '#649348' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className='container p-0 mt-5 pb-5'>
                        <div className='love-content'>
                            <h2 className='text-center pt-5'> Why People
                                <AiTwotoneHeart className='mx-2 fs-1 text-danger' />
                                Love
                                <span style={{ color: 'rgb(124, 177, 93)' }}> Bhargava </span>
                                Phytolab
                            </h2>
                        </div>
                        <Carousel responsive={responsive} className='mt-5'>
                            {testimonials.map((testimonial) => (
                                <div className='card mx-4 card-avtar shadow-sm border-0'
                                    key={testimonial?.id}
                                >
                                    <div style={{ marginLeft: '-6px' }}>
                                        <AiFillStar className='text-warning fs-5 mx-1' />
                                        <AiFillStar className='text-warning fs-5' />
                                        <AiFillStar className='text-warning fs-5 mx-1' />
                                        <AiFillStar className='text-warning fs-5' />
                                        <AiFillStar className='text-warning fs-5 mx-1' />
                                    </div>
                                    <p className='avatar-para' style={isExpanded === testimonial.id ? null : style}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: testimonial.content.rendered
                                        }} />
                                    </p>
                                    <Link className='nav-link d-flex align-items-end 
                                        justify-content-end'
                                        onClick={() => handleExpand(testimonial.id)}
                                    >
                                        <span className='read-btn'>
                                            {isExpanded === testimonial.id ? '...Read Less' : '...Read More'}
                                        </span>
                                    </Link>
                                    <div className='d-flex align-items-center'>
                                        <div className='avatar'>
                                            <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/dummy.jpg`}
                                                className="rounded-circle" alt="Avatar"
                                            />
                                        </div>
                                        <div className='avatar-content ms-3'>
                                            <h5 className="mb-2">
                                                {testimonial.title.rendered}
                                            </h5>
                                            <p className="text-muted">
                                                {testimonial._designation}, {testimonial._location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </section>
        </>
    )
}

export default Testimonials;