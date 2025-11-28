import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export function Contact() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal px-6 py-14 md:py-20 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-slate-500">
            Contact
          </h2>
          <h3 className="heading-font text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
            Vamos construir algo juntos?
          </h3>
          <p className="mt-3 text-sm md:text-[15px] text-slate-600 max-w-2xl">
            Se você viu potencial no meu trabalho e quer conversar sobre uma
            vaga, freela ou colaboração, pode me chamar por e-mail ou pelas
            redes abaixo. Respondo o mais rápido possível.
          </p>
        </div>

        {/* CARD DE CONTATO */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col gap-6 text-sm">
          {/* EMAIL + CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 mb-1">
                Email principal
              </p>
              <div className="flex items-center gap-2">
                <FiMail className="text-amber-500" size={18} />
                <a
                  href="mailto:seuemail@email.com"
                  className="font-medium text-slate-900 underline-offset-2 hover:underline hover:text-amber-600 transition-colors"
                >
                  seuemail@email.com
                </a>
              </div>
            </div>

            <a
              href="mailto:seuemail@email.com"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs md:text-sm font-medium border border-amber-500 bg-amber-500 text-slate-900 hover:bg-amber-600 hover:border-amber-600 active:scale-95 transition duration-200"
            >
              Enviar mensagem
            </a>
          </div>

          {/* LINKS SOCIAIS */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <FiLinkedin className="text-sky-600" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/seuuser"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-medium text-slate-900 underline-offset-2 hover:underline hover:text-amber-600 transition-colors break-all"
                >
                  linkedin.com/in/seuuser
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <FiGithub className="text-slate-700" size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-1">
                  GitHub
                </p>
                <a
                  href="https://github.com/seuuser"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-medium text-slate-900 underline-offset-2 hover:underline hover:text-amber-600 transition-colors break-all"
                >
                  github.com/seuuser
                </a>
              </div>
            </div>

            <div className="sm:col-span-1">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-1">
                Como me abordar
              </p>
              <p className="text-xs md:text-[13px] text-slate-600">
                Me conta em poucas linhas o contexto da vaga ou do projeto, o
                que você está buscando e prazos. Assim eu consigo responder de
                forma objetiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
