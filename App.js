import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DesignerRegister from "./components/DesignerRegister";
import FooterContact from "./components/FooterContactUs";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/designer-register" element={<DesignerRegister />} />
        <Route path="/contact" element={<FooterContact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
