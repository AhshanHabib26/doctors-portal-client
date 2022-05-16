import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";


const Booking = ({setTreatment, treatment, date }) => {
  const { name, slots } = treatment;
  const formateDate = format(date, "PP");
  const [user] = useAuthState(auth);


  const handleSubmit = (e) => {
    const slot = e.target.slot.value;
    const email = user.email
    const phoneNumber = e.target.phone.value;
    const userName = e.target.name.value;

    const bookingData = {
      name: name,
      date: formateDate,
      slot,
      email,
      phoneNumber,
      userName,
    };

    fetch("http://localhost:5000/user", {
      method: "POST",
      body: JSON.stringify(bookingData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          toast.success('Your Booking Added')
        }
      });

    console.log(bookingData);
    e.preventDefault();
    setTreatment(null)
  };

  return (
    <div>
      <input type="checkbox" id="my-booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="my-booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className=" w-11/12 justify-items-center grid grid-cols-1 gap-3 mt-3"
          >
            <input
              type="text"
              name="date"
              readOnly
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="email"
              value={user.email}
              required
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-outline btn-accent w-full max-w-xs">
              Button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
