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
import PageNotFound from './Pages/PageNotFound';

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
        <Route path='/bhargava' element={<HomePage />} />
        <Route path='/bhargava/medicines' element={<Medicines />} />
        <Route path='/bhargava/generics' element={<Generics />} />
        <Route path='/bhargava/blogs' element={<Blogs />} />
        <Route path='/bhargava/contact-us' element={<ContactUs />} />
        {menus.map(item => (item.title.toLowerCase() === 'medicines' ? (
          <Route path={'/bhargava/medicines/:id'} key={item?.ID} element={<SingleProductCat />} />
        ) : (menus.map(subItem => (
          subItem.menu_item_parent === item.post_name && subItem.menu_item_parent !== 'medicines' && (
            <Route path={`/bhargava/${item.title.toLowerCase().replace(/\s+/g, '-')}/:name`}
              element={<SingleHomePage />} key={subItem.ID}
            />
          )
        )))
        ))}
        <Route path={'/bhargava/medicine/:id'} element={<SingleProductPage />} />
        <Route path={'/bhargava/medicine-image/:name'} element={<SingleImagePage />} />
        <Route path={'/bhargava/:name'} element={<SingleBlog />} />
        <Route path={'/bhargava/category/:name'} element={<SingleCatBlog />} />
        <Route path={'/bhargava/author/:name'} element={<BplAdminPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App