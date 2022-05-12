import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Care from './Care';
import Info from './Info';
import Service from './Service';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner/>
           <Info/>
           <Service/>
           <Care/>
           <Appointment/>
        </div>
    );
};

export default Home;