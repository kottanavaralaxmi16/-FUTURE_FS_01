import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Resume from "@/components/portfolio/Resume";
import Gallery from "@/components/portfolio/Gallery";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default Index;
