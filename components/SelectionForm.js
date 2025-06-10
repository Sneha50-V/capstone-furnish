import React from "react";
import "./selectionForm.css";

const SelectionForm = () => {
  return (
    <div className="form-wrapper">
      <h3 className="form-heading">Design & Furnish Your Dream Home</h3>

      {/* Room Selection */}
      <div className="section">
        <h4 className="section-title">Interior Design Options</h4>
        <div className="checkbox-group">
          {[
            "Bedroom",
            "Living Room",
            "Kitchen",
            "Dining Room",
            "Bathroom",
            "Balcony",
          ].map((room) => (
            <label key={room} className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-text">{room}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Design Options */}
      <div className="section">
        <h4 className="section-title">Living Essentials</h4>
        <div className="checkbox-group">
          {["Sofa", "Curtains", "Carpets", "Wall Art", "Beds", "Tables"].map(
            (option) => (
              <label key={option} className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span className="checkbox-text">{option}</span>
              </label>
            )
          )}
        </div>
      </div>

      <div className="btn-container">
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default SelectionForm;
