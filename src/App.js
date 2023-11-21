import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import Generics from './Pages/Generics';
import '../src/css/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Medicines from './Pages/Medicines';
import Blogs from './Pages/Blogs';
import SingleHomePage from './Pages/SingleHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from './redux/features/nav_Slice';
import SingleProductPage from './Pages/SingleProductPage';
import SingleImagePage from './Pages/SingleImagePage';
import SingleBlog from './Pages/SingleBlog';
import SingleCatBlog from './Pages/SingleCatBlog';
import BplAdminPage from './Components/BplAdminPage';
import SingleProductCat from './Components/SingleProductCat';

const App = () => {
  const dispatch = useDispatch();
  const { menus } = useSelector(state => state.navMenus);

  useEffect(() => {
    dispatch(getAllMenu())
    window.scrollTo(0, 0);
  }, [dispatch])
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/medicines' element={<Medicines />} />
        <Route path='/generics' element={<Generics />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        {menus.map(item => (item.title.toLowerCase() === 'medicines' ? (
          <Route path={'/medicines/:id'} key={item?.ID} element={<SingleProductCat />} />
        ) : (menus.map(subItem => (
          subItem.menu_item_parent === item.post_name && subItem.menu_item_parent !== 'medicines' && (
            <Route path={`/${item.title.toLowerCase().replace(/\s+/g, '-')}/:name`}
              element={<SingleHomePage />} key={subItem.ID}
            />
          )
        )))
        ))}
        <Route path={'/medicine/:id'} element={<SingleProductPage />} />
        <Route path={'/medicine-image/:name'} element={<SingleImagePage />} />
        <Route path={'/:name'} element={<SingleBlog />} />
        <Route path={'/category/:name'} element={<SingleCatBlog />} />
        <Route path={'/author/:name'} element={<BplAdminPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App