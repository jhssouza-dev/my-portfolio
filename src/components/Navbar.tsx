// src/components/Navbar.tsx
import { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Resume" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, setActiveId } = useActiveSection(links.map((l) => l.id));

  const handleClick = (id: string) => {
    setActiveId(id);          // marca o item como ativo
    scrollToSection(id);      // scroll suave
    setIsOpen(false);         // fecha menu mobile
  };

  // altura aproximada do header p/ posicionar o menu e o overlay
  const HEADER_HEIGHT = 64; // px (ajusta se precisar)

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          
          {/* Logo / nome */}
          <button
            onClick={() => handleClick("hero")}
            className="flex items-center gap-2"
          >
            <span className="heading-font text-lg sm:text-xl font-semibold cursor-pointer relative group text-slate-900">
              João Souza
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </button>

          {/* Botão mobile (hamburger) */}
          <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-slate-700" />
              <span className="block h-0.5 w-5 bg-slate-700" />
              <span className="block h-0.5 w-5 bg-slate-700" />
            </div>
          </button>

          {/* Navegação desktop */}
          <nav className="hidden sm:flex flex-wrap items-center gap-4 md:gap-6 text-xs sm:text-sm">
            {links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`
                    relative cursor-pointer uppercase tracking-[0.12em]
                    transition-colors
                    ${isActive ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
                  `}
                >
                  {link.label}
                  {/* underline do ativo */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 transition-all duration-300
                      ${isActive ? "w-full bg-amber-500" : "w-0 bg-amber-500"}
                    `}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MENU MOBILE + OVERLAY (fora do header) */}
      {isOpen && (
        <>
          {/* Overlay: cobre tudo abaixo do header */}
          <div
            className="fixed inset-x-0 bottom-0 bg-black/20 sm:hidden z-10"
            style={{ top: HEADER_HEIGHT }}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu mobile fixo logo abaixo do header */}
          <nav
            className="fixed inset-x-0 sm:hidden border-b border-slate-200 bg-white/95 backdrop-blur z-20"
            style={{ top: HEADER_HEIGHT }}
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1 text-xs">
              {links.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className={`
                      w-full text-left py-2 uppercase tracking-[0.16em]
                      transition-colors
                      ${isActive ? "text-amber-600" : "text-slate-700 hover:text-amber-600"}
                    `}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
