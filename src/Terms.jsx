import Navbar from "./navbar";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div className="policy-page">

      <Navbar />

      <div className="policy-card">

        <h1>Terms of Service</h1>

        <p className="updated">
          Last Updated: May 2026
        </p>

        <p>
          By using MediZap, you agree to comply with our
          terms and conditions.
        </p>

        <h2>Use of Service</h2>

        <p>
          Users must provide accurate information while placing
          orders and using the platform.
        </p>

        <h2>Medical Responsibility</h2>

        <p>
          MediZap acts as a delivery platform and does not replace
          professional medical advice or consultation.
        </p>

        <h2>Delivery Timelines</h2>

        <p>
          Delivery times may vary depending on traffic,
          pharmacy availability, weather conditions,
          and operational factors.
        </p>

        <h2>Account Suspension</h2>

        <p>
          We reserve the right to suspend accounts involved
          in fraudulent or abusive activity.
        </p>

        <h2>Changes to Terms</h2>

        <p>
          MediZap may update these terms at any time
          without prior notice.
        </p>

      </div>

      <Footer/>

    </div>
  );
}