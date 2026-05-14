import Navbar from "./navbar";
import Footer from "./Footer";

export default function Careers() {
  return (
    <div className="careers-page">
      <Navbar />

      <section className="careers-hero">
        <div className="careers-content">

          <div className="careers-badge">
            JOIN THE MEDIZAP TEAM
          </div>

          <h1>
            Build the Future of Medicine Delivery
          </h1>

          <p>
            At MediZap, we’re building technology that makes healthcare
            faster, smarter, and more accessible. Join us in shaping the
            future of medicine delivery and healthcare innovation.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfs6Sbcky6n0IsCkPapDbF3mjpnKuVTJmIFNoiucgzjXW-ThQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">
              Apply Now →
            </button>
          </a>

        </div>
      </section>

      <section className="culture-section">

        <div className="culture-card">
          <h2>Why Join MediZap?</h2>

          <div className="culture-points">

            <div className="culture-item">
              <span>⚡</span>
              <p>Fast-growing startup environment</p>
            </div>

            <div className="culture-item">
              <span>🚀</span>
              <p>Opportunity to build from the ground up</p>
            </div>

            <div className="culture-item">
              <span>💡</span>
              <p>Innovation-driven and collaborative culture</p>
            </div>

            <div className="culture-item">
              <span>🏥</span>
              <p>Create real impact in healthcare accessibility</p>
            </div>

            <div className="culture-item">
              <span>📈</span>
              <p>Grow alongside a passionate and ambitious team</p>
            </div>

          </div>
        </div>

      </section>

      <section className="careers-cta-section">

        <div className="careers-cta-card">

          <h2>
            Ready to Build With Us?
          </h2>

          <p>
            We’re always looking for passionate people who want to
            help transform medicine delivery and healthcare logistics.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfs6Sbcky6n0IsCkPapDbF3mjpnKuVTJmIFNoiucgzjXW-ThQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">
              Submit Application →
            </button>
          </a>

        </div>

      </section>
      
      <Footer/>


    </div>
  );
}