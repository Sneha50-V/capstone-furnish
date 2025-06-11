import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DesignerRegister from "./components/DesignerRegister";
import FooterContact from "./components/FooterContactUs";
import Gallery from "./components/Gallery";
import DesignerProfile from "./components/DesignerProfile";
import BookingPage from "./components/BookingPage";
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/designer/:name" element={<DesignerProfile />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
