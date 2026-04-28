import { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const canvasRef = useRef(null);

  const handleCheck = () => {
    const pin = document.getElementById("pincode").value;
    if (!pin) return;

    setShowResult(true);
  };

  // 🔥 OLD SPHERE (FIXED + CLEAN)
  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = 520;
  canvas.width = size;
  canvas.height = size;

  const particles = [];
  const count = 1200;
  const center = size / 2;
  const radius = size / 2;

  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };

  window.addEventListener("mousemove", handleMouseMove);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    const r = radius * 0.9;

    particles.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      size: Math.random() * 2 + 0.5,
    });
  }

  let angle = 0;
  let frameId;

  const animate = () => {
    ctx.clearRect(0, 0, size, size);
    angle += 0.002;

    particles.forEach((p) => {
      const tiltX = mouseY * 0.5;
      const tiltY = mouseX * 0.5;

      let x = p.x * Math.cos(angle + tiltY) - p.z * Math.sin(angle + tiltY);
      let z = p.x * Math.sin(angle + tiltY) + p.z * Math.cos(angle + tiltY);

      let y = p.y * Math.cos(tiltX) - z * Math.sin(tiltX);
      z = p.y * Math.sin(tiltX) + z * Math.cos(tiltX);

      const scale = 600 / (600 + z);
      const screenX = center + x * scale;
      const screenY = center + y * scale;

      const opacity = (z + radius) / (2 * radius);

      ctx.beginPath();
      ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34,211,238,${opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#22d3ee";
      ctx.fill();
    });

    frameId = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(frameId);
  };
}, []);

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="Medizap" />
        </div>

        <div className="nav-center">
          <a>How It Works</a>
          <a>Features</a>
          <a>About Us</a>
          <a>Blog</a>
          <a>For Partners</a>
        </div>

        <div className="nav-right">
          <button
            className="btn-primary"
            onClick={() => alert("You’ve been added to the waitlist 🚀")}
          >
            Join Waitlist →
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="left">
          <span className="badge">⚡ LIGHTNING FAST DELIVERY</span>

          <h1>
            Your Medicines in <br />
            <span>10 Minutes</span>
          </h1>

          <p>
            We’re building the future of medicine delivery. Join our waitlist to
            be the first to experience lightning-fast delivery from nearby
            pharmacies.
          </p>

          <div className="input-box">
            <input id="pincode" placeholder="Enter your pincode" />
            <button onClick={handleCheck}>Check</button>
          </div>

          {showResult && (
            <div className="result-card">
              <div className="result-icon">📍</div>

              <div>
                <h3>Coming Soon!</h3>
                <p>We're launching in Bangalore by Q2 2026</p>
                <span className="link">
                  Join Waitlist to Get Notified →
                </span>
              </div>
            </div>
          )}

          <div className="stats">
            <div>
              <h3>10</h3>
              <p>MINUTES DELIVERY</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>AVAILABLE</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>AUTHENTIC MEDS</p>
            </div>
          </div>

          <button className="btn-primary">Join Waitlist →</button>
        </div>

        <div className="right">
          <div className="sphere">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </section>
    </div>
  );
}