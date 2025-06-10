import React from "react";
import "./DesignerRegister.css";

const DesignerRegister = () => (
  <div className="designer-register-wrapper">
    <div className="designer-form">
      <h2>Designer Registration</h2>

      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <textarea
        placeholder="Short Bio (Tell us about yourself)"
        rows="3"
        required
      />

      <input
        type="text"
        placeholder="Design Theme (e.g., Traditional, Minimalist)"
        required
      />
      <input
        type="text"
        placeholder="Design Category (e.g., Living Room, Kitchen)"
        required
      />
      <textarea
        placeholder="Design Description (what kind of work do you do?)"
        rows="4"
        required
      />
      <label className="upload-label">Upload Design Samples (Images)</label>
      <input type="file" multiple accept="image/*" />
      <button type="submit">Register as Designer</button>
    </div>
  </div>
);

export default DesignerRegister;
