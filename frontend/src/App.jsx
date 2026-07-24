import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import About from "./components/About";
function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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

        <Route
          path="/booking"
          element={<BookingForm />}
        />

         <Route
          path="/aboutus"
          element={<About />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;