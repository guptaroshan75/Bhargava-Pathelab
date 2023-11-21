import React from 'react';
import Carousel from '../Components/Carousel';
import ProductCategory from './ProductCategory';
import KeyStrength from './KeyStrength';
import Blogs from './Blogs';
import TimeLinePage from './TimeLinePage';
import Testimonials from './Testimonials';
import TrustedBrands from './TrustedBrands';
import AboutPage from './AboutPage';
import PreFooter from '../Components/PreFooter';

const HomePage = () => {
    return (
        <>
            <Carousel />
            <ProductCategory />
            <AboutPage />
            <TimeLinePage />
            <TrustedBrands />
            <KeyStrength />
            <Testimonials />
            <Blogs />
            <PreFooter />
        </>
    )
}

export default HomePage


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await axios.get('http://localhost/bhargava/wp-json/custom-menu-api/v1/primary-menu');
//         setMenuItems(response.data);
//       } catch (error) {
//         console.error('Error fetching menu items:', error);
//       }
//     };
//     fetchMenuItems();
//   }, []);

//   return (
//     <div>
//       <h2>Menu</h2>
//       <ul>
//         {menuItems.map(item => (
//           item.menu_item_parent === '0' && (
//             <li key={item.ID}>
//               {item.title}
//               <ul>
//                 {menuItems.map(subItem => (
//                   subItem.menu_item_parent === item.post_name && (
//                     <li key={subItem.ID}>
//                       {subItem.title}
//                     </li>
//                   )
//                 ))}
//               </ul>
//             </li>
//           )
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;



