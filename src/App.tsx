import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "bg-slate-950 text-slate-100 min-h-screen"
          : "bg-slate-50 text-slate-900 min-h-screen"
      }
    >
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />

      {/* padding-top pra não ficar escondido atrás do header fixo */}
      <main className="pt-20">
        <Hero theme={theme} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
