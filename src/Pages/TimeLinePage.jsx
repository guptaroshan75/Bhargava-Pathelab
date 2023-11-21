import React, { useEffect } from 'react';
import timeline from '../js/timeline.min.js';
import '../css/timeline.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHistory } from '../redux/features/history_Time_Slice.js';

const TimeLinePage = () => {
    const dispatch = useDispatch();
    const { history } = useSelector(state => state.historyTime);

    useEffect(() => {
        dispatch(getAllHistory());
    }, [dispatch]);

    useEffect(() => {
        if (history.length > 0) {
            timeline(document.querySelectorAll('.timeline'), {
                forceVerticalMode: 700,
                mode: 'horizontal',
                verticalStartPosition: 'left',
                visibleItems: 6
            });
        }
    }, [history]);

    return (
        <section style={{ backgroundColor: '#f8f8f8' }}>
            <div className='d-flex justify-content-center'>
                <div className='container p-0 timeline-inner postion-relative'>
                    <h1 className="text-center mt-3">
                        Company History
                    </h1>
                </div>
            </div>

            <section className="page-section mt-5 pb-5">
                <div className="container">
                    {history.length === 0 ? (
                        <div className="d-flex justify-content-center mt-3"
                            style={{ color: '#649348' }}>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="timeline">
                            <div className="timeline__wrap">
                                <div className="timeline__items">
                                    {history.map((historytime, index) => (
                                        <div className="timeline__item" key={index}>
                                            <div className="timeline__content">
                                                <h4 className='year'> {historytime?.title?.rendered} </h4>
                                                <div className='timeline_desc mt-1'
                                                    dangerouslySetInnerHTML={{
                                                        __html: historytime?.content?.rendered
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
}

export default TimeLinePage;
