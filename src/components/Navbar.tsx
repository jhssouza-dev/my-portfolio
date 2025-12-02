import { scrollToSection } from "../utils/scrollToSection";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Resume" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        
        {/* Logo / nome */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <span className="heading-font text-lg sm:text-xl font-semibold cursor-pointer relative group text-slate-900">
            João Souza
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </button>

        {/* Navegação */}
        <nav className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="
                cursor-pointer uppercase text-slate-600 
                tracking-[0.12em]
                hover:text-amber-600
                transition-colors
              "
            >
              {link.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
