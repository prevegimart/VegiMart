// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact/Contact'; 
import About from './component/About/About';
import Support from './component/Support/Support';
import Services from './component/Services/Services';
import Career from './component/Career/Career';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import About_Us from './component/Front_page/About_Us/About_Us';
import Blog from './component/Front_page/Blog/Blog';
import SellerSellPage from './component/SellerSellPage/SellerSellPage';
import CartPage from './component/SellerSellPage/CartPage/CartPage'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About_Us />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/sell-items" element={<SellerSellPage />} /> 
       <Route path="/CartPage" element={<CartPage />} /> 
       <Route path="/services" element={<Services />} /> 
              <Route path="/career" element={<Career />} /> 
       <Route path="/support" element={<Support />} /> 
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
