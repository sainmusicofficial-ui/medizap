import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navbar({ setShowWaitlist = () => {} }) {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">

      <Link to="/" className="nav-left">
       <img src="/logo.png" alt="Medizap" />
       </Link>

      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <Link to="/#how-it-works">How It Works</Link>
        <Link to="/#features">Features</Link>
        <Link to="/#about">About Us</Link>
        <Link to="/#updates">Blog</Link>
        <Link to="/#partners">For Partners</Link>
        <Link to="/careers">Careers</Link>
      </div>

<button
  className="menu-toggle"
  onClick={() => setMenuOpen(prev => !prev)}
>
  ☰
</button>

      <div className="nav-right">
        <button
          className="btn-primary"
          onClick={() => setShowWaitlist(true)}
        >
          Join Waitlist →
        </button>
      </div>

    </header>
  );
}