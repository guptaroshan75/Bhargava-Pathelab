import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DrawerComp = ({ cartCount }) => {
    return (
        <>
            <button className="navbar-toggler d-md-block d-lg-none bg-white" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end d-md-block d-lg-none drawer-com"
                tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                    <div className="offcanvas-title" id="offcanvasNavbarLabel">
                        <Link className="nav-link text-warning" aria-current="page" to={'/'}>
                            <img src='../assets/logo1.png' alt='logo' className='w-50' />
                        </Link>
                    </div>
                    <button type="button" className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                <hr className='w-100 text-white' />
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end align-items-center 
                    flex-grow-1"
                    >
                        <NavLink className="nav-link" to={'/'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#ffff',
                            })}
                        >
                            HOME
                        </NavLink>

                        <NavLink className="nav-link" to={'/product-category'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            PRODUCTS
                        </NavLink>

                        <NavLink className="nav-link" to={'/price-list'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            PRICE LIST
                        </NavLink>

                        <NavLink className="nav-link" to={'/gallery'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            GALLERY
                        </NavLink>

                        <NavLink className="nav-link" to={'/blog'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            BLOG
                        </NavLink>

                        <NavLink className="nav-link" to={'/enquiry'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            ENQUIRY
                        </NavLink>

                        <NavLink className="nav-link" to={'/contact'}
                            style={({ isActive }) => ({
                                color: isActive ? '#ffff01' : '#fff',
                            })}
                        >
                            CONTACT US
                        </NavLink>

                        <div className='header-cart'>
                            <NavLink className="nav-link" to={'/cart-page'}
                                style={({ isActive }) => ({
                                    color: isActive ? '#ffff01' : '#fff',
                                })}
                            >
                                <span>
                                    <i className='fas fa-shopping-cart mx-2'> </i>
                                </span>
                                <span className='cart-count'> {cartCount} </span>
                            </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DrawerComp