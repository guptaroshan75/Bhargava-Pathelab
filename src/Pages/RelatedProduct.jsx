import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSpecificProductRelatedId } from '../redux/features/product_Cat_Slice';
import { AiFillPlusCircle } from 'react-icons/ai';

const RelatedProduct = ({ ids }) => {
    const dispatch = useDispatch();
    const { relatedIdProducts } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getSpecificProductRelatedId(ids))
        window.scrollTo(0, 0);
    }, [dispatch, ids])

    return (
        <section className='container p-0 mb-5'>
            <div className='trust-brands postion-relative'>
                <h2> Related Products </h2>
            </div>

            <div className='row mt-5 single-product-menu'>
                {relatedIdProducts?.map((relatedProduct) => (
                    <div className='col-lg-3 col-md-6 col-sm-12 col-12 mb-4' key={relatedProduct?.id}>
                        {relatedProduct?.images.map((img) => (
                            <div key={img?.id}>
                                <Link className='nav-link'
                                    to={`/bhargava/medicine/${relatedProduct?.slug}/?id=${relatedProduct?.id}`}
                                >
                                    <div className="card related-card-product">
                                        <img src={img?.src || '../assests/placeholder.jpg'}
                                            key={img?.id} alt={img?.name}
                                        />
                                        <div className='product-single-link'>
                                            <AiFillPlusCircle className='fs-1 me-1' />
                                        </div>
                                    </div>
                                </Link>
                                <Link className='nav-link'
                                    to={`/bhargava/medicine/${relatedProduct?.slug}/?id=${relatedProduct?.id}`}
                                >
                                    <h2 className='product-title'> {relatedProduct.name} </h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section >
    )
}

export default RelatedProduct