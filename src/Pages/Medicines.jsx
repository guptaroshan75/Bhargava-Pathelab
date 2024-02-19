import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/features/product_Cat_Slice';
import { Link } from 'react-router-dom';
import PreFooter from '../Components/PreFooter';

const Medicines = () => {
    const dispatch = useDispatch();
    const { isLoading, categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories());
        window.scrollTo(0, 0);
    }, [dispatch])

    return (
        <>
            <section className='single-product-img image-fluid'>
                <div className='container p-0'>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='container single-key postion-relative'>
                            <h2 className="text-center fs-4"> Medicines </h2>
                        </div>
                        <nav className='nav-link' aria-label="breadcrumb">
                            <ul className="breadcrumb text-center nav-medicin">
                               <Link className='nav-link breadcrumb-item text-white' to={'/bhargava'}>
                                    Home
                                </Link>
                                <p className="nav-link breadcrumb-item text-white"> Medicines </p>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <div style={{ backgroundColor: '#f8f8f8' }} className='pt-5 pb-5'>
                <div className='mb-4' >
                    <div className='container p-0'>
                        <h4 className="pb-5 medicine-content">
                            From humble beginnings in the year <strong> 1920 </strong> to crossing over a 
                            century successfully, our objective is to make a difference in lives of millions 
                            of people within and beyond India and achieve a healthy world.
                        </h4>
                    </div>

                    <div className='container p-0'>
                        {isLoading ? (
                            <div className="d-flex justify-content-center mt-3"
                                style={{ color: '#649348' }}
                            >
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
                                                <img src={category?.image?.src || `${process.env.REACT_APP_API_KEY}assests/placeholder.jpg` }
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
            
            <PreFooter />
        </>
    )
}

export default Medicines;