import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import bgi from "../Assets/bg1.png";
import Footer from "../Component/Footer";
import AllPosts from '../Component/AllPosts'
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={bgi}
        title="BHARATIYA"
        text="~Unstoppable Entrepreneurs Stories~"
      />
      <AllPosts/>
      <Footer />
    </>
  );
}

export default Home;
