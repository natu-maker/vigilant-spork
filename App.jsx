```jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="/about">About Us</a>
          <a href="#plants">Plants</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO</p>

          <h1>Paradise Nursery</h1>

          <p className="description">
            Bring nature into your home with beautiful, healthy plants.
            Discover the perfect greenery to create your own little paradise.
          </p>

          <button
            className="get-started"
            onClick={() => (window.location.href = "/about")}
          >
            Get Started
          </button>
        </div>

        <div className="hero-decoration">
          🌿
        </div>
      </main>

      <footer>
        <p>© 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
```

For the landing page styling, create an **`App.css`** file:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #24352a;
}

.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(
      90deg,
      rgba(20, 55, 30, 0.9),
      rgba(20, 55, 30, 0.45)
    ),
    url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1800&q=80")
      center/cover;
}

/* Navbar */
.navbar {
  height: 80px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #315c3b;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #315c3b;
  text-decoration: none;
  font-weight: 600;
}

.nav-links a:hover {
  color: #63834f;
}

/* Hero */
.hero {
  flex: 1;
  min-height: calc(100vh - 130px);
  padding: 80px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.hero-content {
  max-width: 650px;
}

.welcome {
  letter-spacing: 4px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #d7e8c5;
}

.hero h1 {
  font-size: clamp(50px, 8vw, 90px);
  line-height: 1;
  margin-bottom: 25px;
}

.description {
  max-width: 600px;
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 35px;
}

/* Button */
.get-started {
  padding: 16px 35px;
  border: none;
  border-radius: 30px;
  background: #d7e8c5;
  color: #24352a;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.get-started:hover {
  background: white;
  transform: translateY(-3px);
}

/* Decorative plant */
.hero-decoration {
  font-size: 180px;
  opacity: 0.85;
}

/* Footer */
footer {
  padding: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  color: #526257;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 0 5%;
  }

  .nav-links {
    gap: 15px;
  }

  .nav-links a {
    font-size: 14px;
  }

  .hero {
    padding: 60px 6%;
  }

  .hero-decoration {
    display: none;
  }

  .hero h1 {
    font-size: 55px;
  }
}

@media (max-width: 500px) {
  .navbar {
    height: auto;
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  .nav-links {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    text-align: center;
  }

  .description {
    font-size: 16px;
  }
}
```

This gives you a simple flow:

**Landing page → “Get Started” → About Us page**

If you're using **React Router**, I can also combine the landing page and the About Us page into a complete `App.jsx` with routes like `/`, `/about`, and `/plants`.
