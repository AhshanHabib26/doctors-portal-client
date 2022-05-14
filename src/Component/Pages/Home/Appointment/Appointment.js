import React from "react";
import doctorImg from "../../../../assets/images/doctor.png";
import "./Appointment.css";


const Appointment = () => {
  return (
    <div className = "appointment_container my-16">
      <div className="flex justify-center items-center">
        <div className="flex-1 hidden lg:block ">
          <img className="mt-[-120px]" src={doctorImg} alt="" />
        </div>
        <div className="flex-1 p-5  lg:pr-8  text-white">
          <h1 className="text-secondary text-xl my-3">Appointment</h1>
          <h2 className="text-4xl my-3">Make an appointment Today</h2>
          <p className="text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn mt-5 text-white bg-gradient-to-r from-primary to-secondary border-0 outline-0 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
