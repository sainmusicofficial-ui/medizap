import Navbar from "./navbar";

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">

      <Navbar />

      <div className="policy-card">

        <h1>Privacy Policy</h1>

        <p className="updated">
          Last Updated: May 2026
        </p>

        <p>
          MediZap respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, store, and safeguard your data when you use our platform.
        </p>

        <h2>Information We Collect</h2>

        <p>
          We may collect personal information including your name,
          mobile number, email address, delivery location,
          prescription details, and payment information.
        </p>

        <h2>How We Use Your Information</h2>

        <p>
          Your information is used to process orders,
          improve delivery services, provide customer support,
          and enhance platform security.
        </p>

        <h2>Prescription Handling</h2>

        <p>
          Prescription uploads are securely processed and only shared
          with licensed pharmacy partners for order fulfillment purposes.
        </p>

        <h2>Payment Security</h2>

        <p>
          All transactions are processed through secure third-party
          payment gateways. MediZap does not store sensitive
          card information.
        </p>

        <h2>Third-Party Services</h2>

        <p>
          We may use trusted third-party services for analytics,
          payments, customer support, and delivery operations.
        </p>

        <h2>Data Protection</h2>

        <p>
          We implement industry-standard security measures to protect
          your personal information from unauthorized access or misuse.
        </p>

        <h2>User Rights</h2>

        <p>
          Users may request access, correction, or deletion of their
          personal information by contacting our support team.
        </p>

        <h2>Contact Us</h2>

        <p>
          support@medizap.co.in
        </p>

      </div>

    </div>
  );
}