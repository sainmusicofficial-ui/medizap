import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const canvasRef = useRef(null);

  const handleCheck = () => {
    const pin = document.getElementById("pincode").value;
    if (!pin) return;
    setShowResult(true);
  };

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

      {/* NAVBAR */}
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
  onClick={() => setShowWaitlist(true)}
>
  Join Waitlist →
</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="left">
          <span className="badge">⚡ LIGHTNING FAST DELIVERY</span>

          <h1>
            Your Medicines in <br />
            <span>10 Minutes</span>
          </h1>

          <p>
            We’re building the future of medicine delivery. Join our waitlist to be the first to experience lightning-fast delivery from nearby pharmacies.
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
        </div>

        <div className="right">
          <div className="sphere">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section">
        <h2>The Medicine Access Crisis</h2>
        <p className="subtitle">
          Every minute matters when health is at stake
        </p>

        <div className="problem-cards">

          <div className="problem-card">
            <div className="icon">⏱</div>
            <h3>32+ Minutes Waiting</h3>
            <p>
              Average pharmacy waiting time exceeds 32 minutes, with 60% of visits failing to meet the 30-minute standard.
            </p>
            <span>65% of chronic patients prefer home delivery</span>
          </div>

          <div className="problem-card">
            <div className="icon">❌</div>
            <h3>Stock Shortages</h3>
            <p>
              Visit multiple pharmacies only to hear "out of stock". Critical medications unavailable when you need them most.
            </p>
            <span>40% face medication accessibility issues</span>
          </div>

          <div className="problem-card">
            <div className="icon">📍</div>
            <h3>Urban Congestion</h3>
            <p>
              Traffic increases delivery times by 35–50% during peak hours.
            </p>
            <span>35–50% longer during rush hours</span>
          </div>

        </div>
      </section>

      {/* HOW SECTION */}
      <section className="how-section">
        <h2>How MediZap Works</h2>
        <p className="subtitle">
          Minutes, not hours. Simple, not complicated.
        </p>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Order Instantly</h3>
              <p>
                Upload prescription or search medicines. Our system checks real-time inventory across pharmacies.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Pharmacy Network</h3>
              <p>
                Verified pharmacies ensure authentic medicines and fast dispatch.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>10-Minute Delivery</h3>
              <p>
                Delivery partners bring medicines within minutes with secure handling.
              </p>
            </div>
          </div>

        </div>

        <div className="trust-card">
          <div className="icon">🛡️</div>
          <div>
            <h3>Trusted Pharmacy Network</h3>
            <p>
              Verified pharmacies ensure quality, authenticity, and ultra-fast delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">

  <h2>Why Timely Medicine Delivery Matters</h2>

  <p className="subtitle">
    Research-backed benefits of immediate medication access
  </p>

  <div className="benefits-grid">

    {/* CARD 1 */}
    <div className="benefit-card">
      <div className="icon">⚡</div>

      <h3>Emergency Response</h3>

      <p>
        For conditions like heart attacks, asthma attacks,
        or severe allergies, immediate medication access can
        be life-saving. Studies show that timely medication
        reduces emergency complications by 40%.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="benefit-card">
      <div className="icon">🛡️</div>

      <h3>Better Adherence</h3>

      <p>
        17–23% improvement in medication adherence when
        delivery is convenient. Chronic disease patients
        maintain consistent treatment schedules, leading to
        better health outcomes.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="benefit-card">
      <div className="icon">🕒</div>

      <h3>Save 2+ Hours Weekly</h3>

      <p>
        Eliminate pharmacy visits, waiting queues, and
        multiple store trips. Especially valuable for elderly
        patients, busy professionals, and caregivers managing
        ongoing treatments.
      </p>
    </div>

  </div>
</section>

{/* WAITLIST MODAL */}
{showWaitlist && (
  <div
    className="waitlist-overlay"
    onClick={() => setShowWaitlist(false)}
  >
    <div
      className="waitlist-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={() => setShowWaitlist(false)}
      >
        ✕
      </button>

      <h2>Join the Waitlist</h2>

<form
  className="waitlist-form"
  onSubmit={(e) => {
    e.preventDefault();

    emailjs.send(
  "service_r7to9nb",
  "template_vpxm5gi",
  {
    email: e.target.email.value,
    phone: e.target.phone.value,
    pincode: e.target.pincode.value,
  },
  "rT5l30wKW_zmITwT4"
);

emailjs.send(
  "service_r7to9nb",
  "template_c1tjidh",
  {
    email: e.target.email.value,
    name: "MediZap User"
  },
  "rT5l30wKW_zmITwT4"
)

.then(() => {
  setShowSuccess(true);
  setShowWaitlist(false);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);
})

.catch(() => {
  alert("Something went wrong");
});
}}
>

  <div className="form-group">
    <label>EMAIL ADDRESS</label>
    <input
      type="email"
      name="email"
      placeholder="your.email@example.com"
      required
    />
  </div>

  <div className="form-group">
    <label>PHONE NUMBER</label>
    <input
      type="text"
      name="phone"
      placeholder="+91 98765 43210"
      required
    />
  </div>

  <div className="form-group">
    <label>PINCODE</label>
    <input
      type="text"
      name="pincode"
      placeholder="560001"
      required
    />
  </div>

  <button type="submit" className="waitlist-submit">
    Join Waitlist →
  </button>

</form>

</div>
</div>

)}

  {showSuccess && (
    <div className="success-popup">
      <div className="success-icon">✓</div>

      <h3>You're on the Waitlist!</h3>

      <p>
        Thank you for joining MediZap.
        We’ll notify you when we launch in your area.
      </p>
    </div>
  )}

<section className="launch-section">

  <div className="launch-left">

    <div className="launch-icon">📍</div>

    <h2>
      Starting Small, Dreaming Big
    </h2>

    <p className="launch-text">
      We’re launching in <span>Bangalore</span>, one pincode at a time.
      Our hyper-local approach ensures we perfect the 10-minute
      delivery promise before expanding.
    </p>

    <div className="launch-points">

      <div className="launch-point">
        <span>✓</span>
        <p>One pincode at a time for quality</p>
      </div>

      <div className="launch-point">
        <span>✓</span>
        <p>Bangalore launch - Q2 2026</p>
      </div>

      <div className="launch-point">
        <span>✓</span>
        <p>More cities coming soon</p>
      </div>

    </div>
  </div>

  <div className="launch-right">

    <div className="city-circle">

      <div className="pulse-ring"></div>

      <div className="city-inner">
        <div className="city-icon">📍</div>
        <h3>Bangalore</h3>
      </div>

    </div>

  </div>

</section>

{/* ABOUT SECTION */}

<section className="about-section">

  <div className="about-left">
    <div className="about-image-card">
      <img
        src="/medizap-animation.gif.gif"
        alt="MediZap Animation"
      />
    </div>
  </div>

  <div className="about-right">

    <h2>About MediZap</h2>

    <h3>
      Revolutionizing Healthcare Access,<br />
      One Delivery at a Time
    </h3>

    <p>
      We’re a passionate team building the future of medicine
      delivery in India. Currently in our MVP stage, we're
      working tirelessly to solve a critical problem:
      the time gap between needing medicine and getting it.
    </p>

    <p>
      Every year, millions of Indians waste hours in pharmacy
      queues, face medication stock-outs, and struggle with
      delayed access to critical medicines. We believe
      healthcare should be instant, reliable, and stress-free.
    </p>

  </div>

</section>

{/* ABOUT CARDS SECTION */}

<section className="about-cards-section">

 <div className="about-mini-card">
  <span>💡</span>

  <div>
    <h5>Our Mission</h5>

    <p>
      To eliminate the anxiety of “Will I get my medicine on time?”
      by building India’s fastest, most reliable medicine delivery network.
    </p>
  </div>
</div>

  <div className="about-mini-card">
    <span>🎯</span>

    <div>
      <h5>Our Goal</h5>

      <p>
        10-minute delivery across major Indian cities.
      </p>
    </div>
  </div>

  <div className="about-mini-card">
    <span>🏗️</span>

    <div>
      <h5>Current Stage</h5>

      <p>
        Building MVP and onboarding pharmacy partners.
      </p>
    </div>
  </div>

</section>

</div>
);
}

