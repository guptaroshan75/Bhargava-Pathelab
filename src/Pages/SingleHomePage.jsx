import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSpecificSinglePage } from '../redux/features/single_HomePage_Slice';

const SingleHomePage = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const dispatch = useDispatch();
    const { singlePages } = useSelector(state => state.pages);
    console.log(singlePages);

    useEffect(() => {
        dispatch(getSpecificSinglePage(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])

    return (
        <>
            {singlePages?.yoast_head_json?.og_image.map((img) => (
                <section className='image-fluid home-img' key={img?.type}
                    style={{ backgroundImage: `url(${img?.url})` }}
                >
                    <div className='container p-0'>
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <div className='container'>
                                <h2 className="text-center single-menu">
                                    <div dangerouslySetInnerHTML={{
                                        __html: singlePages?.title?.rendered
                                    }}
                                    />
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <div className='d-flex justify-content-center mb-5'>
                <div className='container p-0 home-content-main postion-relative'>
                    <h2 className="text-center mt-5">
                        <div dangerouslySetInnerHTML={{
                            __html: singlePages?.content?.rendered
                        }}
                        />
                    </h2>
                </div>
            </div>
        </>
    )
}

export default SingleHomePage