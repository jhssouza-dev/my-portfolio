import { scrollToSection } from "../utils/scrollToSection";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Resume" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};
const SunIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.728l1.414 1.414M17.95 17.95l1.414 1.414" />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 ${
        isDark ? "bg-slate-950/90" : "bg-slate-50/90"
      } backdrop-blur border-b border-slate-800/50`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / nome - rola até o hero */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <span
            className={`
heading-font text-xl font-semibold cursor-pointer relative group
    ${isDark ? "text-amber-400" : "text-amber-700"}
  `}
          >
            João Souza
            <span
              className={`
      absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300
      group-hover:w-full
    `}
            />
          </span>
        </button>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm cursor-pointer ${
                isDark ? "text-slate-100" : "text-slate-800"
              } hover:text-amber-400 transition`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Toggle modo claro/escuro */}
        <button
          onClick={onToggleTheme}
          className={`
    relative inline-flex items-center h-6 w-12 rounded-full transition 
    ${isDark ? "bg-slate-700" : "bg-slate-300"}
  `}
        >
          {/* Bolinha deslizante */}
          <span
            className={`
      absolute flex items-center justify-center w-5 h-5 bg-white rounded-full shadow transform transition
      ${isDark ? "translate-x-6" : "translate-x-1"}
    `}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </span>
        </button>
      </div>
    </header>
  );
}
