import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Research from '../components/Research';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
