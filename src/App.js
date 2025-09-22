import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Accreditations from './components/Accreditations';
import Experience from './components/Experience';
import Footer from './components/Footer';



function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Experience />
      <Accreditations/>
      <Footer/>

    </div>
  );
}

export default App;
