import ParticlesComponent from "../components/ParticlesComponent";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed position particles background that covers the entire viewport */}
      <div className="fixed inset-0 z-0">
        <ParticlesComponent id="particles" />
      </div>

      {/* Navbar */}
      <Nav />

      {/* Scrollable content container */}
      <div className="relative z-10 w-full pt-16">
        {" "}
        {/* Added padding-top to account for fixed navbar */}
        <Intro />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <div id="tech-stack">
          <TechStack />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
