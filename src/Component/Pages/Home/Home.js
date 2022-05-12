import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Info from '../Info/Info';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Service/>
            <Care/>
        </div>
    );
};

export default Home;