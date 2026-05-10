import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">

                <img
                    src={logo}
                    alt="Tailor Logo"
                    className="logo-image"
                />

                <h2>Unique Tailoring Center</h2>

            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>

            <button className="contact-btn">
                Book Now
            </button>
        </nav>
    );
}

export default Navbar;