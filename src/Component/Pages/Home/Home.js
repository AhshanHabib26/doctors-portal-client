import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Care from './Care';
import Info from './Info';
import Service from './Service';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner/>
           <Info/>
           <Service/>
           <Care/>
           <Appointment/>
           <Testimonial/>
           <ContactUs/>
        </div>
    );
};

export default Home;