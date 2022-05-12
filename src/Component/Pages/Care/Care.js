import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Care = () => {
  return (
    <div class=" px-28">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div class=" pl-20">
            <h1 class="text-5xl text-accent font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              {" "}
              Dental or oral health is concerned with your teeth, gums and
              mouth. The goal is to prevent complications such as tooth decay
              (cavities) and gum disease and to maintain the overall health of
              your mouth.{" "}
            </p>
            <button class="btn btn-lg text-white bg-gradient-to-r from-primary to-secondary border-0 outline-0 ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
