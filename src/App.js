import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Component/Pages/Appointment/Appointment";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Pages/Navbar/Navbar";
import Login from "./Component/Pages/Register/Login/Login";
import Signup from "./Component/Pages/Register/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
