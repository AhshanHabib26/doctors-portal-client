import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Pages/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
