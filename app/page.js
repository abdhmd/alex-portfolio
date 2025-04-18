import AboutSection from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutSection />
      <Contact />
    </main>
  );
};

export default Home;
