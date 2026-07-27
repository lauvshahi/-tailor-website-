import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import BookingForm from "./components/BookingForm";
import About from "./components/About";
import Services from "./components/Services";

import Admin from "./pages/Admin";
import Measurement from "./pages/Measurement";
import Orders from "./pages/Orders";



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
          element={<Services />}
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
        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/measurement"
          element={<Measurement />}
        />
        <Route
          path="/orders"
          element={<Orders />}
        />

      </Routes>


      <Footer />

    </BrowserRouter>


  );
}

export default App;