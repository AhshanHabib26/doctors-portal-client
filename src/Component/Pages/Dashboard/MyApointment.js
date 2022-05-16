import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const MyApointment = () => {
  const [booking, setBooking] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const accessToken = data.token;
        localStorage.setItem("accessToken", accessToken);
        setBooking(data.result);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className=" text-xl font-semibold text-secondary italic">
        My Appointment: {booking.length}
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.userName}</td>
              <td>{item.name}</td>
              <td>{item.slot}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApointment;
