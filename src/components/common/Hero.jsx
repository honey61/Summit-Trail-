

import "./style.css";
import videoFile from "./video.mp4";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import rock from "./rock.jpg";
import valley from "./valley.jpg";
import paragliding from "./paragliding.jpg";
import SectionCard from "./SectionCard";
import Populartrek from "./Populartrek";
import mountain from "./mountain.jpg";

export default function Hero() {
  return (
    <div>
      {/* HERO SECTION */}
     <section className="hero-section">
  <video 
    className="hero-video" 
    autoPlay 
    loop 
    muted 
    playsInline 
    src={videoFile} 
  />
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title animate-slide-in">
        Explore the Himalayas: Treks, Trails & Timeless Adventures
      </h1>
      <p className="hero-subtitle animate-fade-in">
        Discover handcrafted journeys across the mountains — from serene valley walks to high-altitude expeditions, guided by experts and powered by passion.
      </p>
    </div>
  </div>
</section>


      {/* DYNAMIC SECTIONS */}
  
        <SectionCard
          image={mountain}
          title="Abount Us"
        />
        <Populartrek 
  image={valley}
  title="Popular Treks" 
/>

      </div>
  
  );
}
