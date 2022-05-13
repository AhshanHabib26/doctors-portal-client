import { format } from "date-fns";
import React from "react";

const Booking = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="my-booking" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-booking"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form className=" w-11/12 justify-items-center grid grid-cols-1 gap-3 mt-3">
            <input
              type="text"
              readOnly
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select class="select w-full max-w-xs">
              {slots.map((slot) => (
                <option  value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <button class="btn btn-outline btn-accent w-full max-w-xs">Button</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
