import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from '../redux/features/blog_Slice';

const Blogs = () => {
    const dispatch = useDispatch();
    const { isLoading, blogs } = useSelector(state => state.posts);

    const formatDate = (dateString) => {
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        const dateParts = dateString.split("-");
        const day = dateParts[2];
        const monthIndex = parseInt(dateParts[1], 10) - 1;
        const month = months[monthIndex];
        const year = dateParts[0];

        return `${day}-${month}-${year}`;
    }
    
    useEffect(() => {
        dispatch(getAllBlog())
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <section>
            <div className='mb-5' >
                <div className='d-flex justify-content-center mb-5'>
                    <div className='container p-0 text-inner postion-relative'>
                        <h2 className="text-center mt-5">
                            Helpful
                            <span style={{ color: 'rgb(124, 177, 93)' }}> Articles & Blogs </span>
                            for You
                        </h2>
                    </div>
                </div>
            </div>

            <div className='container p-0 pt-3 mb-5'>
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-3"
                        style={{ color: '#649348' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <Swiper spaceBetween={25} slidesPerView={4} loop={true}>
                        {blogs.map((blog) => (
                            <SwiperSlide key={blog?.id}>
                                <Link className='nav-link mt-3 card border-0'
                                    to={`/bhargava/${blog?.slug}/?id=${blog?.id}`}
                                >
                                    <img src={blog?.yoast_head_json?.og_image[0].url}
                                        className="card-img-top rounded" alt={blog?.yoast_head_json?.title}
                                    />
                                    <div className="swiper-card mt-3">
                                        <p>
                                            Posted on:
                                            <span style={{ color: '#649348' }}> {formatDate(blog?.date.slice(0, 10))} </span>
                                        </p>
                                        <h3 className='swiper-heading mt-2'>
                                            {blog?.title?.rendered}
                                        </h3>
                                        <div className='swiper-link mt-3'>
                                            <AiFillPlusCircle className='fs-1 me-1' />
                                            Read More
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    )
}

export default Blogs