import React, { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';
import { SideBySideMagnifier } from "react-image-magnifiers";
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProduct } from '../redux/features/product_Cat_Slice';
import RelatedProduct from './RelatedProduct';
import EnquirySection from '../Components/EnquirySection';

const SingleProductPage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { specificProduct } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getSpecificProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])

    const ratingChanged = (newRating) => { };

    return (
        <>
            <hr className='m-0' />
            
            <section className='container p-0 mt-5'>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb product-menu">
                        <Link className="breadcrumb-item nav-link nav-color" to={'/bhargava'}> Home </Link>
                        {specificProduct?.categories.map((category) => (
                            <Link className="breadcrumb-item nav-link nav-color" key={category?.id}
                                to={`/bhargava/medicines/${category?.slug}/?id=${category?.id}`}
                            >
                                {category?.name}
                            </Link>
                        ))}
                        <div className="breadcrumb-item nav-link"> {specificProduct?.name} </div>
                    </ul>
                </nav>
            </section>

            <section className='container p-0 mb-4'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-4'>
                        <div className="card single-product-card">
                            {specificProduct?.images.map((img) => (
                                <div key={img?.id}>
                                    <Link className='nav-link'
                                        to={`/bhargava/medicine-image/${specificProduct?.slug}/?id=${specificProduct?.id}`}
                                    >
                                        <GrSearch className='search-icon' />
                                    </Link>
                                    <SideBySideMagnifier
                                        fillAvailableSpace={false}
                                        alwaysInPlace={true}
                                        imageSrc={img?.src || '../assests/placeholder.jpg'}
                                        style={{ width: '330px', margin: '0 auto' }}
                                        imageAlt={img?.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-4'>
                        <div className="product-details">
                            <h1> {specificProduct?.name} </h1>
                            <p>
                                <div dangerouslySetInnerHTML={{ __html: specificProduct?.short_description }} />
                            </p>

                            <form className='d-flex mt-4 pb-4'>
                                <input type="text" className="form-control input-count" defaultValue={1} />

                                <div className='card-about-more'>
                                    <button className="btn btn-primary about-more nav-link fw-bold"
                                        type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                                    >
                                        <BsEnvelope className='arrow-icon me-2' />
                                        Enquire Now
                                        <span className='arrow-container'>
                                            <RiArrowRightSLine className='arrow-icon' />
                                        </span>
                                    </button>

                                    <EnquirySection specificProduct={specificProduct} />
                                </div>
                            </form>

                            <hr />
                            <div className='d-flex align-items-center product-meta'>
                                <p className=''> Category : </p>
                                {specificProduct?.categories.map((category) => (
                                    <Link className='nav-link' key={category?.id}
                                        to={`/bhargava/medicines/${category?.slug}/?id=${category?.id}`}
                                    >
                                        <span style={{ color: '#649348' }}> {category?.name} </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container p-0 mb-5'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <div className="nav-item text-decoration-none" role="presentation">
                        <button className="nav-link nav-tab-menu active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab"
                            aria-controls="home-tab-pane" aria-selected="true"
                        >
                            Description
                        </button>
                    </div>
                    <div className="nav-item text-decoration-none nav-item-two" role="presentation">
                        <button className="nav-link nav-tab-menu" id="profile-tab" data-bs-toggle="tab"
                            type="button" aria-controls="profile-tab-pane"
                            data-bs-target="#profile-tab-pane" role="tab" aria-selected="false"
                        >
                            Reviews (0)
                        </button>
                    </div>
                </ul>

                <div className="tab-content mb-4" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" tabIndex="0"
                        aria-labelledby="home-tab"
                    >
                        <div className='first-tab'>
                            <div className='product-des postion-relative'>
                                <h2> Description </h2>
                            </div>
                            <div className='product-des-para'
                                dangerouslySetInnerHTML={{
                                    __html: specificProduct?.description
                                }}
                            />
                        </div>
                    </div>

                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" tabIndex="0"
                        aria-labelledby="profile-tab"
                    >
                        <div className='second-tab'>
                            <div className='product-review postion-relative'>
                                <h2> Reviews </h2>
                            </div>
                            <div className='divider-des mt-5'>
                                <p> There are no reviews yet. </p>
                                <p> Be the first to review “{specificProduct?.name}”  </p>
                                <p> Your rating * </p>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={28}
                                    emptyIcon={<i className="fa-regular fa-star"></i>}
                                    activeColor="#649348"
                                />

                                <form>
                                    <div className="mb-3 mt-3">
                                        <textarea className="form-control reviews-field" rows="3" placeholder='Your review *'>
                                        </textarea>
                                    </div>
                                    <button type="submit" className="btn button-review my-3">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {specificProduct?.related_ids && specificProduct.related_ids.length > 0 && (
                <RelatedProduct ids={specificProduct?.related_ids} />
            )}
        </>
    )
}

export default SingleProductPage;