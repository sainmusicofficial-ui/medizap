import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer-section">

      <div className="footer-grid">

        <div className="footer-brand">

          <img src="/logo.png" alt="MediZap" />

          <h3>Because Every Second Counts</h3>

          <p>
            Revolutionizing medicine delivery in India,
            one pincode at a time.
          </p>

        </div>


        <div className="footer-column">

          <h4>Quick Links</h4>

          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#about">About Us</a>
          <a href="#updates">Blog</a>
          <a href="#partners">For Partners</a>
          <Link to="/careers">Careers</Link>


        </div>


        <div className="footer-column">

          <h4>Contact Us</h4>

          <p>✉ support@medizap.co.in</p>
          <p>📞 +91 91870 47404</p>
          <p>📍 Bangalore, Karnataka</p>

        </div>


        <div className="footer-column">

          <h4>Stay Updated</h4>

          <p className="footer-update-text">
            Follow us for the latest updates on our
            launch and expansion.
          </p>

          <div className="social-buttons">

            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Instagram</button>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>© 2026 MediZap. All rights reserved.</p>

        <div className="footer-policy-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>

      </div>

    </section>
  )
}