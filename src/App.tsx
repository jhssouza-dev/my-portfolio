import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50  text-slate-900">
      <Navbar />
      <main className="pt-15">
      {/* padding-top pra não ficar escondido atrás do header fixo */}
        <Hero />
        <main className="pt-15 "></main>
        <About />
        <main className="pt-15"></main>
        <Experience />
        <main className="pt-15"></main>
        <Projects />
        <main className="pt-15"></main>
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
