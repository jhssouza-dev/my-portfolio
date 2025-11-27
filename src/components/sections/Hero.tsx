import { scrollToSection } from "../../utils/scrollToSection";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

type HeroProps = {
  theme: "light" | "dark";
};

export function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* FOTO – mobile primeiro */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64">
            {/* fundo “card” atrás da foto */}
            <div
              className={`absolute inset-0 rounded-full ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              } translate-x-3 translate-y-3`}
            />
            {/* foto redonda */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-500 shadow-lg">
              <img
                src="/img.JPEG"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* TEXTO – mobile depois */}
        <div className="flex-1 order-2 md:order-1">
          <p
            className={`text-xs tracking-[0.25em] mb-4 uppercase ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Hello! MY NAME IS
          </p>

          <h1
            className={`heading-font text-4xl md:text-5xl font-bold mb-3 ${
              isDark ? "text-amber-400" : "text-amber-700"
            }`}
          >
            JOÃO SOUZA
          </h1>

          <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-6">
            Frontend Web Developer
          </p>

          <p
            className={`text-sm md:text-[15px] max-w-xl mb-8 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Focado em construir interfaces modernas, responsivas e performáticas
            usando React, TypeScript e Tailwind. Gosto de transformar ideias em
            experiências digitais claras e elegantes.
          </p>

          {/* Botão principal + socials */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/cv.pdf"
                download
                className={`inline-flex items-center justify-center rounded-full px-6 py-2 text-xs border transition ${
                  isDark
                    ? "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950"
                    : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-slate-950"
                }`}
              >
                Download CV
              </a>

              <button
                onClick={() => scrollToSection("projects")}
                className={`text-xs underline underline-offset-4 ${
                  isDark ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Ver projetos
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/seuuser"
                target="_blank"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition ${
                  isDark
                    ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <FaInstagram size={16} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/seuuser"
                target="_blank"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition ${
                  isDark
                    ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <FaGithub size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/seuuser"
                target="_blank"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition ${
                  isDark
                    ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
