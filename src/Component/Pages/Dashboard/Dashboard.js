import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-bar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pl-6">
          <Outlet/>
       
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-bar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52  bg-base-100 text-base-content">
          <li  className="mb-2">
            <NavLink to='/dashboard'>My Appointment</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/users'>All User</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
