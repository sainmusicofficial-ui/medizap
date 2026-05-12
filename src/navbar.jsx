import { Link } from "react-router-dom";

export default function Navbar({ setShowWaitlist = () => {} }) {
  return (
    <header className="navbar">

      <Link to="/" className="nav-left">
       <img src="/logo.png" alt="Medizap" />
       </Link>

      <div className="nav-center">
        <Link to="/#how-it-works">How It Works</Link>
        <Link to="/#features">Features</Link>
        <Link to="/#about">About Us</Link>
        <Link to="/#updates">Blog</Link>
        <Link to="/#partners">For Partners</Link>
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
  );
}