import Navbar from "./navbar";

export default function RefundPolicy() {
  return (
    <div className="policy-page">

      <Navbar />

      <div className="policy-card">

        <h1>Refund Policy</h1>

        <p className="updated">
          Last Updated: May 2026
        </p>

        <p>
          MediZap strives to ensure customer satisfaction
          with every order placed through our platform.
        </p>

        <h2>Eligible Refunds</h2>

        <p>
          Refunds may be issued for cancelled orders,
          failed deliveries, incorrect medicines,
          damaged products, or duplicate payments.
        </p>

        <h2>Order Cancellation</h2>

        <p>
          Orders may only be cancelled before they are
          processed or dispatched by the pharmacy partner.
          Once dispatched, cancellation may not be possible.
        </p>

        <h2>Non-Refundable Cases</h2>

        <p>
          Opened medicine packages, temperature-sensitive
          products, and items damaged after delivery
          are not eligible for refunds.
        </p>

        <h2>Refund Processing Time</h2>

        <p>
          Approved refunds are generally processed within
          5–7 business days depending on the payment provider
          and banking systems.
        </p>

        <h2>Verification Process</h2>

        <p>
          MediZap reserves the right to verify refund claims
          before approval. Additional proof such as images
          or order details may be requested.
        </p>

        <h2>Contact Support</h2>

        <p>
          For refund-related assistance, contact:
          <br />
          support@medizap.co.in
        </p>

      </div>

    </div>
  );
}