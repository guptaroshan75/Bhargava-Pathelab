import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from '../redux/features/nav_Slice';
import { getAllCategories } from '../redux/features/product_Cat_Slice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { menus } = useSelector(state => state.navMenus);
    const { categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllMenu())
        dispatch(getAllCategories());
        window.scrollTo(0, 0);
    }, [dispatch])

    const sanitizeTitle = (title) => {
        const parser = new DOMParser();
        const parsedTitle = parser.parseFromString(title, 'text/html');
        return parsedTitle.body.textContent || "";
    };
    
    return (
        <nav className="bg-white py-3">
            <div className='container d-flex justify-content-between align-items-center p-0'>
                <div>
                    <Link className="nav-link nav-logo" aria-current="page" to={'/home'}>
                        <img src='../../assests/logo.png' alt='logo.png' />
                    </Link>
                </div>

                <nav className="navbar navbar-expand-lg bg-white d-flex mx-4
                      justify-content-sm-between"
                >
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {menus.map(item => (item.menu_item_parent === '0' && (
                                    <NavLink className="nav-link nav-item dropdown"
                                        to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        key={item?.ID}
                                        style={({ isActive }) => ({
                                            color: isActive ? '#649348' : '#000',
                                        })}
                                    >
                                        <div className='d-flex align-items-center main-menu'>
                                            {item.title}
                                            <IoIosArrowDown className='ms-1' />
                                        </div>

                                        <ul className="dropdown-menu py-3 shadow-sm">
                                            {item.title.toLowerCase() === 'medicines' ? (
                                                categories.map((category) => (
                                                    <Link className="dropdown-item"
                                                        to={`/${item.title.toLowerCase()}/${category?.slug}/?id=${category?.id}`}
                                                        key={category.id}
                                                    >
                                                        {category.name}
                                                    </Link>
                                                ))
                                            ) : (
                                                menus.map(subItem => (
                                                    subItem.menu_item_parent === item.post_name &&
                                                    subItem.menu_item_parent !== 'medicines' && (
                                                        <div key={subItem?.ID}>
                                                            <Link className="dropdown-item"
                                                                to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
                                                            >
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: subItem.title
                                                                }}
                                                                />
                                                            </Link>
                                                        </div>
                                                    )
                                                ))
                                            )}
                                        </ul>
                                    </NavLink>
                                )))}
                            </ul>
                        </div>
                    </div>
                </nav>

                <Link className='nav-link d-flex align-items-center'>
                    <BsTelephone className='fs-3 me-3' style={{ color: 'rgb(137 217 90)' }} />
                    <div className='d-flex flex-column phone_number'>
                        <small> Helpline Number </small>
                        <div>  +91.120.4671000 </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;

