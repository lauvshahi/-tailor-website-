import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <About />
      <WhatsAppButton/>
    </>
  );
}

export default Home;