import React, { useState } from "react";
import "./DesignerProfile.css";
import { useNavigate } from "react-router-dom";

const DesignerProfile = () => {
  const [showReview, setShowReview] = useState(false);
  const navigate = useNavigate();

  // For demonstration, this can be replaced with navigation logic

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img
          src="https://c.wallhere.com/photos/2a/97/room_interior-107198.jpg!d"
          alt="Cover"
        />
      </div>
      <div className="profile-main">
        <div className="avatar">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt="Designer"
          />
        </div>
      </div>
      <div className="details">
        <h2>Kevin Smith</h2>
        <p>Advisor and Consultant at Stripe Inc.</p>
        <p>8 years of experience</p>
      </div>

      <div className="profile-actions">
        <button className="rating-btn" onClick={() => setShowReview(true)}>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          RATING & COMMENTS
        </button>
        <button className="contact-btn" onClick={() => navigate("/booking")}>
          BOOKING PAGE
        </button>
      </div>

      {/* Simple Review Modal */}
      {showReview && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Leave a Review</h3>
            <textarea
              placeholder="Write your comments..."
              style={{ width: "100%", minHeight: 60 }}
            />
            <div style={{ marginTop: 16 }}>
              <button onClick={() => setShowReview(false)}>Close</button>
              <button style={{ marginLeft: 8 }}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignerProfile;
