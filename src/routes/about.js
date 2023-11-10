import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import bgi from "../Assets/bg1.png";
import AboutUs from "../Component/AboutUs";
import Footer from "../Component/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={bgi} subtitle="About" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
