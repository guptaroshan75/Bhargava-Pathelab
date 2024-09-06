import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFooterMenu, getAllFooterMenuTitle } from '../redux/features/footer_Slice';

const Footer = () => {
    const ids = ['4', '5', '27']

    const dispatch = useDispatch();
    const { footerMenuTitle, footerMenus } = useSelector(state => state.footers);

    useEffect(() => {
        dispatch(getAllFooterMenuTitle(ids))
        dispatch(getAllFooterMenu(ids))
    }, [dispatch, ids]);

    const sanitizeTitle = (title) => {
        const parser = new DOMParser();
        const parsedTitle = parser.parseFromString(title, 'text/html');
        return parsedTitle.body.textContent || "";
    };
    return (
        <>
            <div style={{ backgroundColor: '#f8f8f8' }}>
                <section className='container pt-5 pb-5 p-0'>
                    <div className='row'>
                        <div className=' col-lg-4 col-md-6 col-sm-12 col-12'>
                            <img src={`${process.env.REACT_APP_API_KEY}assests/logo.png`}
                                alt='logo.png' className='footer-logo'
                            />

                            <div className='footer-content mt-4'>
                                <p> B-92, Sector-2, Noida -201301 (U.P) India </p>
                                <p> +91.120.4671000 </p>
                                <p> info@bhargavaphytolab.com </p>
                            </div>

                            <div className='nav-menu mb-3'>
                                <Link to={'https://m.facebook.com/bhargavaphytolab/'}
                                    target="_blank"
                                >
                                    <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/facebook.gif`}
                                        alt="FaceBook-gif" className='social-icon'
                                    />
                                </Link>
                                <Link to={'https://www.linkedin.com/company/bhargava-phytolab-pvt-ltd-'}
                                    target="_blank"
                                >
                                    <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/linkedin.gif`}
                                        alt="Linkdin-gif" className='social-icon'
                                    />
                                </Link>
                                <Link to={'https://www.youtube.com/c/BhargavaPhytolab'}
                                    target="_blank"
                                >
                                    <img src={`${process.env.REACT_APP_API_KEY}backend/wp-content/uploads/2023/09/youtube.gif`}
                                        alt="Youtube-gif" className='social-icon'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className=' col-lg-8 col-md-6 col-sm-12 col-12'>
                            <div className='row'>
                                {footerMenus.map((menuItems, index) => (
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'
                                        key={index}
                                    >
                                        <div className='d-flex justify-content-between footer-menu'>
                                            <h4 className='position-relative'>
                                                {footerMenuTitle[index]?.name}
                                            </h4>
                                        </div>

                                        <div className='nav-menu mt-4'>
                                            {footerMenuTitle[index]?.slug === 'medicines' ? (
                                                menuItems.map((menuItem) => (
                                                    <NavLink className='nav-link d-flex align-items-center'
                                                        key={menuItem?.id} style={{ color: '#656565' }}
                                                        to={`/bhargava/medicines/${sanitizeTitle(menuItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${menuItem?.object_id}`}
                                                    >
                                                        <BsArrowRight className='icon-footer me-2' />
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: menuItem.title
                                                        }}
                                                        />
                                                    </NavLink>
                                                ))
                                            ) : (
                                                footerMenuTitle[index]?.slug !== 'medicines' && (
                                                    menuItems.map((menuItem) => (
                                                        <React.Fragment key={menuItem?.id}>
                                                            {menuItem.title === 'Helpful Articles & Blogs' ? (
                                                                <NavLink
                                                                    className='nav-link d-flex align-items-center'
                                                                    style={{ color: '#656565' }}
                                                                    to={`/bhargava/blogs`}
                                                                >
                                                                    <BsArrowRight className='icon-footer me-2' />
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: menuItem.title
                                                                    }} />
                                                                </NavLink>
                                                            ) : (
                                                                <NavLink
                                                                    className='nav-link d-flex align-items-center'
                                                                    style={{ color: '#656565' }}
                                                                    to={`/bhargava/home/${sanitizeTitle(menuItem.title)
                                                                        .toLowerCase()
                                                                        .replace(/\s+/g, '-')
                                                                        .trim()}/?id=${menuItem?.object_id}`}
                                                                >
                                                                    <BsArrowRight className='icon-footer me-2' />
                                                                    <div dangerouslySetInnerHTML={{
                                                                        __html: menuItem.title
                                                                    }} />
                                                                </NavLink>
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                    )
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section >
            </div >

            <div className='d-flex justify-content-center flex-wrap align-items-center mt-3 mb-3'>
                <p className='text-center footer-para'>
                    Copyright © 2023
                    <span style={{ color: 'rgb(124, 177, 93)' }} className='ms-1'>
                        Bhargava Phytolab
                    </span>
                    . All Right Reserved. Website Design by
                </p>
                <Link to={'https://www.betasofttechnology.com/'} target="_blank">
                    <span className='circle-anim mx-3'>
                        <img src={`${process.env.REACT_APP_API_KEY}assests/beta-soft-technology.png`}
                            alt='beta-soft-technology'
                        />
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Footer