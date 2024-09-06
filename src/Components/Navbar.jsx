import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from '../redux/features/nav_Slice';
import { getAllCategories } from '../redux/features/product_Cat_Slice';
import { RiMenu2Fill } from "react-icons/ri";

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
        // <nav className="bg-white py-lg-3 py-2">
        //     <div className='container-fluid px-lg-4 px-md-4 px-3 d-flex justify-content-between align-items-center p-0'>
        //         <Link className="nav-link nav-logo" aria-current="page" to={'/bhargava'}>
        //             <img src={`${process.env.REACT_APP_API_KEY}assests/logo.png`}
        //                 alt='logo.png'
        //             />
        //         </Link>

        // <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse"
        //     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //     aria-expanded="false" aria-label="Toggle navigation"
        // >
        //     <RiMenuFill size={25} />
        // </button>

        //         <nav className="navbar navbar-expand-md bg-white d-lg-flex d-md-flex d-none mx-4
        //               justify-content-sm-between"
        //         >
        //             <div className='d-flex justify-content-between align-items-center'>
        //                 <div className="navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav me-auto mb-lg-0 gap-lg-2 gap-md-1">
        //                         {menus.map(item => {
        //                             if (item.menu_item_parent === '0') {
        //                                 if (item.title.toLowerCase() === 'home') {
        //                                     return (
        //                                         <NavLink
        //                                             className="nav-link nav-item dropdown"
        //                                             to={'/bhargava'} key={item?.ID}
        //                                             style={({ isActive }) => ({
        //                                                 color: isActive ? '#649348' : '#000',
        //                                             })}
        //                                         >
        //                                             <div className='d-flex align-items-center main-menu'>
        //                                                 {item.title}
        //                                                 <IoIosArrowDown className='ms-1' />
        //                                             </div>

        //                                             <ul className="dropdown-menu py-3 shadow-sm">
        //                                                 {item.title.toLowerCase() === 'home' ? (
        //                                                     menus.map(subItem => (
        //                                                         subItem.menu_item_parent === item.post_name &&
        //                                                         subItem.menu_item_parent !== 'medicines' && (
        //                                                             <div key={subItem?.ID}>
        //                                                                 <Link className="dropdown-item"
        //                                                                     to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
        //                                                                 >
        //                                                                     <div dangerouslySetInnerHTML={{
        //                                                                         __html: subItem.title
        //                                                                     }}
        //                                                                     />
        //                                                                 </Link>
        //                                                             </div>
        //                                                         )
        //                                                     ))
        //                                                 ) : (null)}
        //                                             </ul>
        //                                         </NavLink>
        //                                     );
        //                                 } else {
        //                                     return (
        //                                         <NavLink
        //                                             className="nav-link nav-item dropdown"
        //                                             to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
        //                                             key={item?.ID}
        //                                             style={({ isActive }) => ({
        //                                                 color: isActive ? '#649348' : '#000',
        //                                             })}
        //                                         >
        //                                             <div className='d-flex align-items-center main-menu'>
        //                                                 {item.title}
        //                                                 <IoIosArrowDown className='ms-1' />
        //                                             </div>

        //                                             <ul className="dropdown-menu py-3 shadow-sm">
        //                                                 {item.title.toLowerCase() === 'medicines' ? (
        //                                                     categories.map((category) => (
        //                                                         <Link className="dropdown-item"
        //                                                             to={`/bhargava/${item.title.toLowerCase()}/${category?.slug}/?id=${category?.id}`}
        //                                                             key={category.id}
        //                                                         >
        //                                                             {category.name}
        //                                                         </Link>
        //                                                     ))
        //                                                 ) : (
        //                                                     menus.map(subItem => (
        //                                                         subItem.menu_item_parent === item.post_name &&
        //                                                         subItem.menu_item_parent !== 'medicines' && (
        //                                                             <div key={subItem?.ID}>
        //                                                                 <Link className="dropdown-item"
        //                                                                     to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
        //                                                                 >
        //                                                                     <div dangerouslySetInnerHTML={{
        //                                                                         __html: subItem.title
        //                                                                     }}
        //                                                                     />
        //                                                                 </Link>
        //                                                             </div>
        //                                                         )
        //                                                     ))
        //                                                 )}
        //                                             </ul>
        //                                         </NavLink>
        //                                     );
        //                                 }
        //                             }
        //                         })}
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>

        // <Link className='nav-link d-lg-flex d-none align-items-center'>
        //     <BsTelephone className='fs-3 me-3' style={{ color: 'rgb(137 217 90)' }} />
        //     <div className='d-flex flex-column phone_number'>
        //         <small> Helpline Number </small>
        //         <div>  +91.120.4671000 </div>
        //     </div>
        // </Link>
        //     </div>
        // </nav>


        <nav class="navbar navbar-expand-md bg-white py-lg-3 py-2">

            <div className='container-fluid px-lg-4 px-md-4 px-3 d-flex justify-content-between 
                align-items-center p-0'
            >
                <Link className="nav-link nav-logo" aria-current="page" to={'/bhargava'}>
                    <img src={`${process.env.REACT_APP_API_KEY}assests/logo.png`}
                        alt='logo.png'
                    />
                </Link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <RiMenu2Fill size={25} />
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 gap-lg-2 gap-md-1 mt-lg-0 mt-md-0 mt-4">
                            {menus?.map(item => {
                                if (item.menu_item_parent === '0') {
                                    if (item.title.toLowerCase() === 'home') {
                                        return (
                                            <NavLink
                                                className="nav-link nav-item dropdown"
                                                to={'/bhargava'} key={item?.ID}
                                                style={({ isActive }) => ({
                                                    color: isActive ? '#649348' : '#000',
                                                })}
                                            >
                                                <div className='d-flex align-items-center main-menu'>
                                                    {item.title}
                                                    <IoIosArrowDown className='ms-1' />
                                                </div>

                                                <ul className="dropdown-menu py-3 shadow-sm">
                                                    {item.title.toLowerCase() === 'home' ? (
                                                        menus.map(subItem => (
                                                            subItem.menu_item_parent === item.post_name &&
                                                            subItem.menu_item_parent !== 'medicines' && (
                                                                <div key={subItem?.ID}>
                                                                    <Link className="dropdown-item"
                                                                        to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
                                                                    >
                                                                        <div dangerouslySetInnerHTML={{
                                                                            __html: subItem.title
                                                                        }}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                            )
                                                        ))
                                                    ) : (null)}
                                                </ul>
                                            </NavLink>
                                        );
                                    } else {
                                        return (
                                            <NavLink
                                                className="nav-link nav-item dropdown"
                                                to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
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
                                                                to={`/bhargava/${item.title.toLowerCase()}/${category?.slug}/?id=${category?.id}`}
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
                                                                        to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
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
                                        );
                                    }
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>

                <Link className='nav-link d-lg-flex d-none align-items-center'>
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


// import React, { useEffect } from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
// import { Link, NavLink } from 'react-router-dom';
// import { BsTelephone } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllMenu } from '../redux/features/nav_Slice';
// import { getAllCategories } from '../redux/features/product_Cat_Slice';
// import { RiMenu2Fill } from "react-icons/ri";

// const Navbar = () => {
//     const dispatch = useDispatch();
//     const { menus } = useSelector(state => state.navMenus);
//     const { categories } = useSelector(state => state.category);

//     useEffect(() => {
//         dispatch(getAllMenu());
//         dispatch(getAllCategories());
//         window.scrollTo(0, 0);
//     }, [dispatch]);

//     const sanitizeTitle = (title) => {
//         const parser = new DOMParser();
//         const parsedTitle = parser.parseFromString(title, 'text/html');
//         return parsedTitle.body.textContent || "";
//     };

//     return (
//         <nav className="navbar navbar-expand-md bg-white py-lg-3 py-2">
//             <div className='container-fluid px-lg-4 px-md-4 px-3 d-flex justify-content-between align-items-center p-0'>
//                 <Link className="nav-link nav-logo" aria-current="page" to={'/bhargava'}>
//                     <img src={`${process.env.REACT_APP_API_KEY}assests/logo.png`} alt='logo.png' />
//                 </Link>

//                 <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                     aria-expanded="false" aria-label="Toggle navigation">
//                     <RiMenu2Fill size={25} />
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-lg-0 gap-lg-2 gap-md-1 mt-lg-0 mt-md-0 mt-4">
//                         {menus?.map(item => {
//                             if (item.menu_item_parent === '0') {
//                                 if (item.title.toLowerCase() === 'home') {
//                                     return (
//                                         <NavLink
//                                             className="nav-link nav-item dropdown"
//                                             to={'/bhargava'} key={item?.ID}
//                                             style={({ isActive }) => ({
//                                                 color: isActive ? '#649348' : '#000',
//                                             })}
//                                         >
//                                             <div className='d-flex align-items-center main-menu'>
//                                                 {item.title}
//                                                 <IoIosArrowDown className='ms-1' />
//                                             </div>

//                                             <ul className="dropdown-menu py-3 shadow-sm">
//                                                 {item.title.toLowerCase() === 'home' ? (
//                                                     menus.map(subItem => (
//                                                         subItem.menu_item_parent === item.post_name &&
//                                                         subItem.menu_item_parent !== 'medicines' && (
//                                                             <div key={subItem?.ID}>
//                                                                 <Link className="dropdown-item"
//                                                                     to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
//                                                                 >
//                                                                     <div dangerouslySetInnerHTML={{
//                                                                         __html: subItem.title
//                                                                     }} />
//                                                                 </Link>
//                                                             </div>
//                                                         )
//                                                     ))
//                                                 ) : null}
//                                             </ul>
//                                         </NavLink>
//                                     );
//                                 } else {
//                                     return (
//                                         <NavLink
//                                             className="nav-link nav-item dropdown"
//                                             to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
//                                             key={item?.ID}
//                                             style={({ isActive }) => ({
//                                                 color: isActive ? '#649348' : '#000',
//                                             })}
//                                         >
//                                             <div className='d-flex align-items-center main-menu'>
//                                                 {item.title}
//                                                 <IoIosArrowDown className='ms-1' />
//                                             </div>

//                                             <ul className="dropdown-menu py-3 shadow-sm">
//                                                 {item.title.toLowerCase() === 'medicines' ? (
//                                                     categories.map(category => (
//                                                         <Link className="dropdown-item"
//                                                             to={`/bhargava/${item.title.toLowerCase()}/${category?.slug}/?id=${category?.id}`}
//                                                             key={category.id}
//                                                         >
//                                                             {category.name}
//                                                         </Link>
//                                                     ))
//                                                 ) : (
//                                                     menus.map(subItem => (
//                                                         subItem.menu_item_parent === item.post_name &&
//                                                         subItem.menu_item_parent !== 'medicines' && (
//                                                             <div key={subItem?.ID}>
//                                                                 <Link className="dropdown-item"
//                                                                     to={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/${sanitizeTitle(subItem.title).toLowerCase().replace(/\s+/g, '-').trim()}/?id=${subItem?.object_id}`}
//                                                                 >
//                                                                     <div dangerouslySetInnerHTML={{
//                                                                         __html: subItem.title
//                                                                     }} />
//                                                                 </Link>
//                                                             </div>
//                                                         )
//                                                     ))
//                                                 )}
//                                             </ul>
//                                         </NavLink>
//                                     );
//                                 }
//                             }
//                             return null;
//                         })}
//                     </ul>
//                 </div>

//                 <Link className='nav-link d-lg-flex d-none align-items-center'>
//                     <BsTelephone className='fs-3 me-3' style={{ color: 'rgb(137 217 90)' }} />
//                     <div className='d-flex flex-column phone_number'>
//                         <small> Helpline Number </small>
//                         <div> +91.120.4671000 </div>
//                     </div>
//                 </Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;