import React from "react";
import "./FooterContact.css";

const FooterContact = () => {
  return (
    <div className="footer-contact-hero">
      <div className="footer-contact-overlay">
        <div className="footer-contact-form-box">
          <h2>Your dream interiors is just a click away</h2>
          <p>Turn your home into a dream home. Consult our experts.</p>

          <form className="footer-contact-form">
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="tel" placeholder="Phone Number (Optional)" />

            <select required>
              <option value="">Purpose of Contact</option>
              <option value="service">Interior Design Service</option>
              <option value="pricing">Pricing/Package Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="technical">Technical Issue</option>
              <option value="other">Other</option>
            </select>

            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Request</button>
          </form>

          <p className="footer-note">
            © 2025 JustFurnishIt | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
