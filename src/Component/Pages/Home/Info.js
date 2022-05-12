import React from "react";
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div class="text-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-12  ">
        <div class="card w-96 p-2 flex flex-row  bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
      <figure>
        <img
          src={clock}
          alt="Clock"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Openning Hours</h2>
        <p>Please! Visit Portal Our Opennigns Times</p>
      </div>
    </div>
    <div class="card w-96 p-2 flex flex-row  bg-accent from-primary to-secondary">
      <figure>
        <img
          src={marker}
          alt="Marker"
        />
      </figure>
      <div class="card-body  ">
        <h2 class="card-title">Visit Our Location</h2>
        <p>Chandpur, Chittagonh - Bangladesh</p>
      </div>
    </div>
    <div class="card w-96 p-2 flex flex-row  bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
      <figure>
        <img
          src={phone}
          alt="Phone"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Contact Us</h2>
        <p>+880 - 000000000</p>
      </div>
    </div>
    </div>
  );
};

export default Info;
