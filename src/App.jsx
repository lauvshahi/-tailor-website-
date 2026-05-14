import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
// import Booking from "./pages/Booking";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


      </Routes>

      <Footer />
      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;