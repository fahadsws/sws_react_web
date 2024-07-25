import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import HomeSection from "./Component/HomeSection";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Singlecontent from "./Pages/Blogs/Singlecontent";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import { Box } from "@mui/material";
import Privacy from "./Pages/FooterPage/Privacy";
import Terms from "./Pages/FooterPage/Terms";
import Support from "./Pages/FooterPage/Support";
import Shipping from "./Pages/FooterPage/Shipping";
import Refund_policy from "./Pages/FooterPage/Refund_policy";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Festival_section from "./Pages/Blogs/Festival_section";
import ServiceMan from "./Pages/ServicePage/ServiceMan";
import ContactMan from "./Pages/ContactPage/ContactMan";
import PhpDepartment from "./Pages/ServicePage/DevelopmentPage/PhpDepartment"
import WordPress from "./Pages/ServicePage/DevelopmentPage/WordPress";
import Shopify from "./Pages/ServicePage/DevelopmentPage/Shopify";
import WebDesigning from "./Pages/ServicePage/DevelopmentPage/WebDesigning";
import Graphic from "./Pages/ServicePage/DevelopmentPage/Graphic";
import Ecommerce from "./Pages/ServicePage/DevelopmentPage/Ecommerce";
import Laraval from "./Pages/ServicePage/DevelopmentPage/Laraval";
import Codeigniter from "./Pages/ServicePage/DevelopmentPage/Codeigniter";
import React_Native from "./Pages/ServicePage/DevelopmentPage/React_Native";
import ScrollToTop from "./Child-Component/ScrollToTop";
import OurJourney from "./Pages/Aboutpage/OurJourney";
import LifeSoham from "./Component/LifeSoham";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Project_Main from "./Pages/Project/Project_Main";
import Project_singlecontent from "./Pages/Project/Project_singlecontent";
import Footer2 from "./Component/Footer2";


function App() {
  const url_slug = "https://wp.phpcodedemo"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"

  useEffect(()=>{
    const fetcH = async () =>{
      const tryy = await fetch('https://sws-react-api.onrender.com/api/') 
    }
    fetcH();
  })

  return (
    <Box >
      <Router>
        <ScrollToTop />
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path={`about/`} element={<Aboutmain />} />
          <Route path={`contact-us/`} element={<ContactMan />} />

          <Route path={`blogs`} element={<AllBlogs Api_url={Api_url} url_slug={url_slug} />} />
          <Route path={`:id`} element={<Singlecontent Api_url={Api_url} />} />
          <Route path={`categories/:id`} element={<Festival_section url_slug={url_slug} />} />

          <Route path={`career/`} element={<Careermain />} />
          <Route path={`services/`} element={<ServiceMan />} />

          <Route path={`services/php-development/`} element={<PhpDepartment />} />
          <Route path={`services/wordpress-development/`} element={<WordPress />} />
          <Route path={`services/shopify-development/`} element={< Shopify />} />
          <Route path={`services/web-designing/`} element={<WebDesigning />} />
          <Route path={`services/graphic-designing/`} element={<Graphic />} />
          <Route path={`services/ecommerce-development/`} element={<Ecommerce />} />
          <Route path={`services/laraval-development/`} element={<Laraval />} />
          <Route path={`services/codeigniter-development/`} element={<Codeigniter />} />
          <Route path={`services/react-native-development/`} element={<React_Native />} />

          <Route path={`life-at-soham/`} element={<LifeSoham />} />

          <Route path={`privacy-policy/`} element={<Privacy />} />
          <Route path={`terms-conditions/`} element={<Terms />} />
          <Route path={`support-and-maintenance-packages/`} element={<Support />} />
          <Route path={`shipping-delivery-policy/`} element={<Shipping />} />
          <Route path={`cancellation-refund-policy/`} element={<Refund_policy />} />

          <Route element={<Footer2 />} />

          <Route path={`testimonial/`} element={<Testimonial />} />
          <Route path={`project/`} element={< Project_Main />} />
          <Route path={`singleproject/`} element={<Project_singlecontent />} />


        </Routes>

        <ToastContainer />
      </Router>
    </Box>
  );
}

export default App;
