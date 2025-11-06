import React from "react";
import { EXPEDITIONS } from "../../data/expeditions";
import "./style.css";

export default function ExpeditionsSection({ onEnquire }) {
  return (
    <section id="expeditions" className="expeditions-section">
      <div className="expeditions-header">
        <h2 className="expeditions-title">Expeditions</h2>
        <span className="expeditions-note">Click any card to enquire</span>
      </div>

      <div className="expeditions-grid">
        {EXPEDITIONS.map((e) => (
          <article
            key={e.id}
            onClick={() => onEnquire(e)}
            className="expedition-card"
          >
            <div className="expedition-image">Image</div>
            <h3 className="expedition-name">{e.title}</h3>
            <p className="expedition-info">
              {e.altitude} • {e.region}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
