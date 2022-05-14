import React from "react";
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'

const Service = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className=" text-secondary text-1xl font-bold uppercase">
          Our Services
        </h1>
        <h2 className="text-2xl text-accent">Services We Provide</h2>
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-3  gap-5  '>
        <div className="card p-2 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={fluoride}
              alt="Fluoride"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold text-accent">Flouride Treatment</h2>
            <p>Dentists provide professional fluoride treatments in the form of a highly</p>
          </div>
        </div>
        <div className="card p-2 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={cavity}
              alt="Cavity"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold text-accent">Cavity Filling</h2>
            <p>Sometimes a cavity filling will pull away from the tooth to which it is attached</p>
          </div>
        </div>
        <div className="card p-2 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={whitening}
              alt="Whitening"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold text-accent">Teeth Whitening</h2>
            <p>whitening strips or trays can have a positive effect on your smile.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
