import React from "react";
import './Testimonial.css'
import Quotes from '../../../../assets/icons/quote.svg'

const Testimonial = () => {
  return (
    <div>
      <div className="main_container">
        <div className="title_container">
        <h1 className=" text-secondary text-xl font-bold mt-16">Testimonial</h1>
        <h2 className=" text-accent text-2xl">What Our Patients Says</h2>
        </div>
        <div className="image_container w-16 ">
            <img src={Quotes} alt="" />
        </div>
      </div>
      <div className="testimonial_container p-0 lg:px-8 my-5">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className=" text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quidem quo veritatis ipsam! Natus id minus, culpa modi amet assumenda?</p>
              <div class="card-actions flex flex-col justify-start">
              <h2 class="card-title text-accent">Ahshan Habib</h2>
              <p className="text-accent text-md mt-[-8px]">Bangladesh</p>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className=" text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quidem quo veritatis ipsam! Natus id minus, culpa modi amet assumenda?</p>
              <div class="card-actions flex flex-col justify-start">
              <h2 class="card-title text-accent">Abu Yousuf</h2>
              <p className="text-accent text-md mt-[-8px]">Bangladesh</p>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <p className=" text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quidem quo veritatis ipsam! Natus id minus, culpa modi amet assumenda?</p>
              <div class="card-actions flex flex-col justify-start">
              <h2 class="card-title text-accent">Rony Prodhan</h2>
              <p className="text-accent text-md mt-[-8px]">Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
