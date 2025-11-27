export function About() {
  return (
    <section id="about" className="min-h-[60vh] px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
            About
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Quem sou, o que faço e no que acredito.
          </h3>
        </div>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-8">
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-700">
            Sou um desenvolvedor frontend focado em criar experiências
            digitais claras, limpas e responsivas. Gosto de transformar
            layouts em componentes reutilizáveis e manter o código organizado,
            sempre pensando em performance e manutenibilidade.
            <br />
            <br />
            Hoje estudo e trabalho com foco em React, TypeScript e Tailwind,
            construindo interfaces que fazem sentido tanto para o usuário
            quanto para quem vai dar manutenção no projeto amanhã.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 text-sm text-gray-700">
            <p className="font-semibold mb-3">Stack principal</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TypeScript", "Tailwind CSS", "Vite", "Git", "REST APIs"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <p className="font-semibold mb-2">O que busco</p>
            <p className="text-xs text-gray-600">
              Oportunidades para crescer em times que valorizam boas práticas,
              código limpo e produtos com foco real no usuário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
