import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Unique Tailoring Center</h2>
          <p>Perfect Fit, Perfect Style</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Basundhara, Kathmandu</p>
          <p>📞 9841473809</p>
          <p>📞 9869023389</p>
          <p>✉️ uniquetailoringcenter@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Gallery</p>
          <p>Book Appointment</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Unique Tailoring Center. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;