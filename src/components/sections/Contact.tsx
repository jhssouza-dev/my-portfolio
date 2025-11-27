export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
          Contact
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Vamos construir algo juntos?
        </h3>
        <p className="text-sm text-gray-700 mb-6 max-w-xl">
          Se você viu potencial no meu trabalho e quer conversar sobre uma
          vaga, freela ou colaboração, me chama:
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 text-sm">
          <div>
            <p className="text-xs text-gray-500 mb-1">Email</p>
            <a
              href="mailto:seuemail@email.com"
              className="underline font-medium"
            >
              seuemail@email.com
            </a>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
            <a
              href="https://linkedin.com/in/seuuser"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              linkedin.com/in/seuuser
            </a>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">GitHub</p>
            <a
              href="https://github.com/seuuser"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              github.com/seuuser
            </a>
          </div>

          <div className="pt-2">
            <p className="text-xs text-gray-500 mb-1">Mensagem rápida</p>
            <p className="text-xs text-gray-700">
              Me conta em poucas linhas o contexto da vaga ou do projeto e o
              que você espera de um frontend dev. :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
