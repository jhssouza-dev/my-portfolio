import { scrollToSection } from "../../utils/scrollToSection";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center px-6 py-12 md:py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* FOTO – mobile primeiro */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 md:-mt-10">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            {/* fundo “card” atrás da foto */}
            <div className="absolute inset-0 rounded-full" />
            {/* foto redonda */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="/img.JPEG"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div className="flex-1 order-2 md:order-1">
          <p className="text-xs tracking-[0.25em] mb-4 uppercase text-slate-500">
            Hello! MY NAME IS
          </p>

          <h1 className="heading-font text-4xl md:text-5xl font-bold mb-3 text-amber-600">
            JOÃO SOUZA
          </h1>

          <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-6 text-slate-700">
            Frontend Web Developer
          </p>

          <p className="text-sm md:text-[15px] max-w-xl mb-8 text-slate-700">
            Focused on building modern, responsive, and high performance interfaces using React, TypeScript, and Tailwind. I enjoy turning ideas into clear and elegant digital experiences.
          </p>

          {/* Botões + socials */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium border border-amber-500 bg-amber-500 text-slate-900 hover:bg-amber-600 hover:border-amber-600 transition-colors"
              >
                Download CV
              </a>

              <button
                onClick={() => scrollToSection("projects")}
                className="group relative text-sm cursor-pointer font-medium text-slate-700 hover:text-amber-600 transition-colors"
              >
                View projects
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/jhssouza-dev"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-sm hover:border-amber-500/70 hover:-translate-y-0.5 transition duration-200"
              >
                <FaGithub size={20} className="text-amber-600" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jhssouza-dev/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-sm hover:border-amber-500/70 hover:-translate-y-0.5 transition duration-200"
              >
                <FaLinkedinIn size={20} className="text-amber-600" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jhenriique"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-sm hover:border-amber-500/70 hover:-translate-y-0.5 transition duration-200"
              >
                <FaInstagram size={20} className="text-amber-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
