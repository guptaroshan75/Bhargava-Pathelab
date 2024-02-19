import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { getAllCategories, getSpecificCategory, getSpecificCategoryProduct }
    from '../redux/features/product_Cat_Slice';
import { useDispatch, useSelector } from 'react-redux';

const SingleProductCat = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);
    const { specificCategory, specificCategoriesProducts } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getSpecificCategory(id))
        dispatch(getSpecificCategoryProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = specificCategoriesProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <section className='single-product-img image-fluid'>
                <div className='container p-0'>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='container single-key postion-relative'>
                            <h2 className="text-center fs-4">
                                {specificCategory?.name}
                            </h2>
                        </div>
                        <nav className='nav-link' aria-label="breadcrumb">
                            <ul className="breadcrumb text-center nav-medicin">
                                <Link className='nav-link breadcrumb-item text-white' to={'/bhargava'}>
                                    Home
                                </Link>
                                <p className="nav-link breadcrumb-item text-white">
                                    {specificCategory?.name}
                                </p>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <section className='container p-0 pt-4'>
                <div className='row mt-5 mb-3'>
                    <div className=' col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex justify-content-between single-product-menu'>
                            <h4 className='position-relative'> Medicine </h4>
                        </div>

                        <div className="product-menu mt-3">
                            {categories.map((category) => (
                                <div className='category-menu' key={category?.id}>
                                    <Link to={`/bhargava/medicines/${category?.slug}/?id=${category?.id}`}
                                        className="nav-link"
                                    >
                                        {category?.name}
                                    </Link>
                                    <span className='count'> ({category?.count}) </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' col-lg-9 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex flex-column single-product-menu'>
                            <div className='d-flex justify-content-between'>
                                <p className='mb-4'>
                                    Showing all {specificCategoriesProducts.length} results
                                </p>
                                <div className="single-product-select">
                                    <select className="form-select">
                                        <option defaultValue> Default sorting </option>
                                        <option value="1"> Sort by popularity </option>
                                        <option value="2"> Sort by average rating </option>
                                        <option value="3"> Sort by latest </option>
                                        <option value="4"> Sort by price: low to high </option>
                                        <option value="5"> Sort by price: high to low </option>
                                    </select>
                                </div>
                            </div>

                            <div className='row'>
                                {currentProducts.map((specificCatProduct) => (
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 mb-4'
                                        key={specificCatProduct?.id}
                                    >
                                        <Link className='nav-link'
                                            to={`/bhargava/medicine/${specificCatProduct?.slug}/?id=${specificCatProduct?.id}`}
                                        >
                                            <div className="card card-single-product">
                                                {specificCatProduct?.images.map((img) => (
                                                    <img src={img?.src || `${process.env.REACT_APP_API_KEY}assests/woocommerce-product-placeholder.png`}
                                                        key={img?.id} alt={img?.name}
                                                    />
                                                ))}
                                                <div className='product-single-link'>
                                                    <AiFillPlusCircle className='fs-1 me-1' />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={`/bhargava/medicine/${specificCatProduct?.slug}/?id=${specificCatProduct?.id}`}
                                            className='nav-link'
                                        >
                                            <h2 className='product-title'> {specificCatProduct?.name} </h2>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {specificCategoriesProducts.length > productsPerPage && (
                                <nav aria-label="Pagination">
                                    <ul className="pagination justify-content-center">
                                        {Array.from({ length: Math.ceil(specificCategoriesProducts.length / productsPerPage) }, (_, index) => (
                                            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index + 1}>
                                                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProductCat