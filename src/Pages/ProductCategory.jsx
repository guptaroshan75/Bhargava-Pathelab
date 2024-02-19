import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../redux/features/product_Cat_Slice';

const ProductCategory = () => {
    const dispatch = useDispatch();
    const { isLoading, categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories());
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='pb-5'>
            <div className='mb-4' >
                <div className='d-flex justify-content-center mb-5'>
                    <div className='container p-0 text-inner postion-relative'>
                        <h2 className="text-center mt-5">
                            Choose Your Product Category
                        </h2>
                    </div>
                </div>

                <div className='container p-0'>
                    {isLoading ? (
                        <div className="d-flex justify-content-center mt-3"
                            style={{ color: '#649348' }}>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row d-flex align-items-end">
                            {categories.map((category) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3
                                        mb-sm-0 main-col" key={category?.id}
                                >
                                    <div className="card mb-3 main-card">
                                        <Link to={`/bhargava/medicines/${category?.slug}/?id=${category?.id}`}
                                            className="nav-link"
                                        >
                                            <img src={category?.image?.src ||  `${process.env.REACT_APP_API_KEY}assests/placeholder.jpg` }
                                                className='card-img card-img-top' alt={category?.name}
                                            />
                                        </Link>
                                    </div>
                                   <Link to={`/bhargava/medicines/${category?.slug}/?id=${category?.id}`}
                                        className="nav-link product-category"
                                    >
                                        <h4 className='mb-3 text-center'>
                                            {category?.name}
                                        </h4>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCategory