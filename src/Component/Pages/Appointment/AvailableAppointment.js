import { format } from "date-fns";
import React from "react";
import useService from "../../../Hooks/useService";

const AvailableAppointment = ({ date }) => {
  const [services] = useService();

  return (
    <div>
      <h4 className="text-center text-2xl text-secondary my-12">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
        {services.map((service) => (
          <div key={service._id}>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h2 className="text-xl text-secondary font-semibold" >{service.name}</h2>
                <p className="mt-2">{service.slots[1]}</p>
                <h3>{service.slots.length} Spaces Available</h3>
                <div class="card-actions justify-center">
                  <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
