import React, { useEffect } from 'react';
// import Lightbox from "react-awesome-lightbox";
// import "react-awesome-lightbox/build/style.css";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSpecificProduct } from '../redux/features/product_Cat_Slice';

const SingleImagePage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { specificProduct } = useSelector(state => state.category);
    console.log(specificProduct);

    useEffect(() => {
        dispatch(getSpecificProduct(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])

    return (
        <>
            {specificProduct?.images.map((img) => (
                <div className='show-img' key={img?.id}>
                    {/* <Lightbox image={img?.src}
                        title={img?.name}
                    /> */}
                    <p> {img?.name} </p>
                </div>
            ))}
        </>
    )
}

export default SingleImagePage