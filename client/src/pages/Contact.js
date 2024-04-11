import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/Contact.css";
const Contact = () => {
 

  return (

    <Layout title={'Contact-Us'}>
      <div className='title'>Feel Free to Contact Us</div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.1155778661144!2d73.18025788800757!3d18.896756136930748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e790815f198d%3A0x9869361deb5fb042!2sRasayani%20Auto%20Rikshaw%20Stand!5e0!3m2!1sen!2sin!4v1712335689663!5m2!1sen!2sin" 
    width={1520} 
    height={500}
     style={{border: 0}}
      allowFullScreen loading="lazy"
       referrerPolicy="no-referrer-when-downgrade" />
      <div className='image-container'><img src='images/contact-us.png' alt=''></img></div>
    <div className='container'>
      <div className='contact-form'>
        <form action='https://formspree.io/f/mjvnpvre' method='post' className='contact-inputs'>
          <input type='text' name='username' placeholder='USERNAME' autoComplete='off' required className='uname'></input>
          <input type='email' name='email' placeholder='E-MAIL' autoComplete='off' required className='emailfield'></input>
          <textarea name='message' cols={20} rows={4} autoComplete='off' required className='textareafield' placeholder='WRITE YOUR MESSAGE'>
          </textarea>
          <input type='submit' value={"send"} className='btn-submit'></input>

        </form>
      </div>

    </div>



      {/*<div className='row contactus'>
      <div className='col-md-6'>
      <img src='/images/contactus.jpg' alt='contactus'
      style={{width:"100%"}}/>
      </div>
      <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Feel Free to Contact Us</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@saimobiles.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
  </div>*/}
    </Layout>
  );
};

export default Contact;