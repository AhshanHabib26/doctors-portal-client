import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact_us_container mt-20'>
           <div className='text-center'>
               <h1 className=' text-secondary text-2xl  font-semibold' >Contact Us</h1>
               <p className='text-white text-3xl font-extralight mb-8'>Stay connected with us</p>
               <div className='form_container'>
                   <form>
                      <div>
                      <input type="email" placeholder='Email Address' required />
                      </div>
                       <div>
                       <input type="text" placeholder='Subject' required />
                       </div>
                       <div>
                           <textarea placeholder='Your Message' required name="" id="" cols="30" rows="10"></textarea>
                       </div>
                       <div>
                           <input type="button" value="Submit" />
                       </div>
                   </form>
               </div>
           </div>
        </div>
    );
};

export default ContactUs;