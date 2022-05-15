import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Component/Pages/Appointment/Appointment";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Pages/Navbar/Navbar";
import Login from "./Component/Pages/Register/Login/Login";
import Signup from "./Component/Pages/Register/Signup/Signup";
import Reviews from "./Component/Pages/Reviews/Reviews";
import RequireAuth from "./RequireAuth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import MyApointment from "./Component/Pages/Dashboard/MyApointment";
import Users from "./Component/Pages/Dashboard/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />

        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<MyApointment/>}/>
          <Route path="users" element={<Users/>}/>
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
