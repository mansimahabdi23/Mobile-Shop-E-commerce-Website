import React from 'react'
import Layout from '../components/Layout/Layout'
//import { CiMobile3 } from "react-icons/ci";
const About = () => {
  return (
    <Layout title={"About us-Sai Mobile"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <h1>About Us</h1>
          <img
            src="/images/aboutus2.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <b>Sai Mobiles was found in 2021.</b>
Sai Mobiles is an Indian Mobiles and Services shop which sells mobile devices and mobile
accessories. They are just like other local shops which is not much popular but its sales are
growing nowadays due to their business strategy as well as selling mobile phones by using
services like EMI and 0 down payment with offers and discounts.
<br></br>
Currently, Sai Mobiles has opened its another branch of their shop in the same area as that
of their previous shop.
<br></br><br></br><br></br>
Sai Mobiles registered address is:<br></br>
𖡡 At Post Mohopada, Near Auto Stand, Tal. Khalapur, Dist.
Raigarh-410206 Maharashtra.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About