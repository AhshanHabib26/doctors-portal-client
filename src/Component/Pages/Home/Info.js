import React from "react";
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-12  ">
        <div className="card w-96 p-2 flex flex-row  bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
      <figure>
        <img
          src={clock}
          alt="Clock"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Openning Hours</h2>
        <p>Please! Visit Portal Our Opennigns Times</p>
      </div>
    </div>
    <div className="card w-96 p-2 flex flex-row  bg-accent from-primary to-secondary">
      <figure>
        <img
          src={marker}
          alt="Marker"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">Visit Our Location</h2>
        <p>Chandpur, Chittagonh - Bangladesh</p>
      </div>
    </div>
    <div className="card w-96 p-2 flex flex-row  bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
      <figure>
        <img
          src={phone}
          alt="Phone"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Contact Us</h2>
        <p>+880 - 000000000</p>
      </div>
    </div>
    </div>
  );
};

export default Info;
