import React from "react";
import Chair from '../../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div  className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Chair"
          />
          <div className="pr-20">
            <h1 className="text-5xl text-accent font-bold pr-40 sm:pr-4">Your New Smile Starts Here</h1>
            <p className="py-6 text-accent text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-0 outline-0 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
