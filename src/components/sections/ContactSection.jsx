import React from "react";
import "./style.css";

export default function ContactSection({ onOpenEnquiry }) {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Questions, custom trips, or group bookings — get in touch.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h4 className="card-title">General Enquiry</h4>
          <p className="card-text">
            Email: team.summittrails@gmail.com <br />
            WhatsApp: +91 70608 24379
          </p>
          <div className="card-button">
            <button onClick={() => onOpenEnquiry(null)} className="btn-primary">
              Enquire
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
