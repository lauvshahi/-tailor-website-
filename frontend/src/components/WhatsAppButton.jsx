import { FaWhatsapp } from "react-icons/fa";

import "../styles/WhatsAppButton.css";

function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/9779841473809"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >

      <FaWhatsapp />

    </a>
  );
}

export default WhatsAppButton;