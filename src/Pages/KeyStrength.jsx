import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStrength } from '../redux/features/key_Strength_Slice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { getSpecificStrengthMedia } from '../redux/features/media_Slice';

const TrustBrands = () => {
    const dispatch = useDispatch();
    const { isLoading, key_strength } = useSelector(state => state.strength);
    const { medias } = useSelector(state => state.medias);
    
    useEffect(() => {
        dispatch(getAllStrength());
    }, [dispatch]);

    useEffect(() => {
        const featuredMediaIDs = key_strength.map(strength => strength.featured_media);
        if (featuredMediaIDs.length > 0) {
            dispatch(getSpecificStrengthMedia(featuredMediaIDs))
        }
    }, [dispatch, key_strength]);

    const filteredStrengths = key_strength.filter(strength => {
        const matchingMedia = medias.find(media => media.id === strength.featured_media);
        return matchingMedia !== undefined;
    });


    return (
        <>
            <section className='gallery-img image-fluid'>
                <div className='container p-0 pb-3 pt-5'>
                    <div className='d-flex justify-content-center mb-5'>
                        <div className='container great-key postion-relative'>
                            <h2 className="text-center mt-4">
                                Our Greatest Key Strength
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container p-0 mb-5'>
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-3"
                        style={{ color: '#649348' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className='container p-0 pt-3 mb-5' style={{ marginTop: '-10%' }}>
                        <Swiper spaceBetween={25} slidesPerView={5} loop={true}
                            navigation={true} modules={[Navigation]} className="mySwiper"
                        >
                            {filteredStrengths.map((strength) => (
                                <SwiperSlide key={strength?.id}>
                                    <div className="card card-height">
                                        <div className='slider-card mt-4'>
                                            {medias.map((media) => {
                                                if (media.id === strength.featured_media) {
                                                    return (
                                                        <img key={media.id} src={media.source_url} className="card-img-top" alt={media.title} />
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                        <div className="card-body slider-content">
                                            <h5 className="text-center">
                                                <div dangerouslySetInnerHTML={{
                                                    __html: strength.title.rendered
                                                }} />
                                            </h5>
                                            <p className='text-center'>
                                                <div dangerouslySetInnerHTML={{
                                                    __html: strength.content.rendered
                                                }} />
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </>
    )
}

export default TrustBrands;