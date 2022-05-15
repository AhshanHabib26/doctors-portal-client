import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-bar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content pl-6">
          <Outlet/>
       
      </div>
      <div class="drawer-side">
        <label for="dashboard-bar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-52  bg-base-100 text-base-content">
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
