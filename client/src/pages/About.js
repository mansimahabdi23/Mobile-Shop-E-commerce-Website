import React from 'react';
import Layout from '../components/Layout/Layout';
import "../styles/AboutUs.css";
import { Link } from 'react-router-dom';

//import { CiMobile3 } from "react-icons/ci";
const About = () => {
  return (
    <Layout title={"About us-Sai Mobile"}>
       <div className="about-us-page">
      <h1 className="page-title">About Us</h1>
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="images/saimob2.png" alt="Company Image" />
        </div>
        <div className="about-us-content">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-text">
          We are a mobile shop dedicated to providing the latest and most innovative mobile devices to our customers. Our team is passionate about technology and strives to offer a wide range of products to meet every need and budget.
          </p>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
          Our mission is to make your mobile experience exceptional. We believe that every customer is unique, and we are dedicated to providing personalized service to meet your mobile needs. Whether you're looking for the latest smartphone or a budget-friendly option, we're here to help you find the perfect fit.
          </p>
          <h2 className="section-title">Our Values</h2>
          <p className="section-text">
          At our core, we are driven by a commitment to provide exceptional service and quality products to our customers. We believe in honesty, integrity, and transparency in all our interactions. Our goal is to build long-lasting relationships with our customers based on trust and mutual respect.
           We are dedicated to delivering a seamless shopping experience and helping you find the perfect mobile device to fit your needs.
          </p>
          <h5 className='insta-page'>Check out our happy😇 customers on our
          <Link to="https://www.instagram.com/_saimobile_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> Instagram page</Link>✉️</h5>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About