import ActiveButton from "../../ActiveButton";
import "./Splash.css";

export default function Splash() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          WANDER<span className="hero-subtext">.HD</span>
        </h1>
        <p className="hero-description">
          Discover breathtaking destinations across the Philippines with curated
          tours, local insights, and hassle-free planning all in one platform.
        </p>
        
        <div className="hero-buttons">
          {/* Folosim componenta ta de Button cu culori diferite */}
          <ActiveButton text="Plan Your Trip" color="#1a2b48" />
          <button className="btn-outline">Explore Destinations</button>
        </div>
      </div>
    </section>
  );
}