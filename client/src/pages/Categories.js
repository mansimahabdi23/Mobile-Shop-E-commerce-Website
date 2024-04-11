import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/Categories.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="image-container">
        <img src="images/freedelivery3.jpg" alt="Image1"></img>
        <img src="images/affordable.png" alt="Image2"></img>
        <img src="images/0emi.jpg" alt="Image3"></img>

      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  <h2 className="card-title">{c.name}</h2>
                </Link>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;