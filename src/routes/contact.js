import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import bgi from "../Assets/bg1.png";
import ContactUs from "../Component/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={bgi} subtitle="Contact Us" />
      <ContactUs />
    </>
  );
}

export default Contact;
