import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <p className="subtitle">WELCOME TO PARADISE NURSERY</p>
          <h1>Growing Beauty, One Plant at a Time.</h1>
          <p>
            We believe every home and garden deserves a touch of nature.
            Paradise Nursery provides healthy, beautiful plants to help you
            create your own little paradise.
          </p>
          <a href="#story" className="hero-btn">
            Discover Our Story
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section" id="story">
        <div className="story-image">
          <div className="plant-icon">🌿</div>
        </div>

        <div className="story-content">
          <p className="section-label">OUR STORY</p>
          <h2>Rooted in Nature, Grown with Passion</h2>

          <p>
            Paradise Nursery started with a simple idea: make it easier for
            everyone to bring the beauty of nature into their lives.
          </p>

          <p>
            From small indoor plants to beautiful outdoor greenery, we carefully
            select and nurture every plant we offer. Our goal is to provide
            healthy plants while helping our customers discover the joy of
            gardening.
          </p>

          <p>
            Whether you're an experienced gardener or buying your first plant,
            we're here to help you grow with confidence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-content">
          <p className="section-label">OUR MISSION</p>
          <h2>Bringing Nature Closer to You</h2>

          <p>
            Our mission is to make plants accessible, affordable, and enjoyable
            for everyone. We want to inspire healthier, greener spaces by
            connecting people with plants they can love and care for.
          </p>

          <div className="mission-cards">
            <div className="mission-card">
              <span>🌱</span>
              <h3>Healthy Plants</h3>
              <p>
                We carefully nurture our plants to ensure they arrive healthy
                and ready to grow.
              </p>
            </div>

            <div className="mission-card">
              <span>💚</span>
              <h3>Customer Care</h3>
              <p>
                We're passionate about helping our customers find the perfect
                plants for their spaces.
              </p>
            </div>

            <div className="mission-card">
              <span>🌍</span>
              <h3>A Greener World</h3>
              <p>
                We encourage everyone to create greener homes, gardens, and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="values-section">
        <div className="values-header">
          <p className="section-label">WHY CHOOSE US</p>
          <h2>More Than Just a Nursery</h2>
          <p>
            We're here to make your plant journey simple, enjoyable, and
            rewarding.
          </p>
        </div>

        <div className="values-grid">
          <div className="value">
            <strong>01</strong>
            <h3>Quality First</h3>
            <p>
              Every plant is selected with care and attention to quality.
            </p>
          </div>

          <div className="value">
            <strong>02</strong>
            <h3>Expert Guidance</h3>
            <p>
              Get helpful advice on choosing and caring for your plants.
            </p>
          </div>

          <div className="value">
            <strong>03</strong>
            <h3>Beautiful Spaces</h3>
            <p>
              We help you transform ordinary spaces into peaceful green
              environments.
            </p>
          </div>

          <div className="value">
            <strong>04</strong>
            <h3>Love for Nature</h3>
            <p>
              Everything we do is inspired by our passion for plants and nature.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <p className="section-label">START GROWING</p>
          <h2>Find Your Perfect Plant</h2>
          <p>
            Bring a little more green into your life with Paradise Nursery.
          </p>

          <button onClick={() => (window.location.href = "/shop")}>
            Explore Our Plants
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
