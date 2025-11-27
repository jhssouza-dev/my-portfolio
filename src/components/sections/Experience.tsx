const experiences = [
  {
    title: "Frontend Developer - Projetos pessoais",
    period: "2023 - Atual",
    place: "Estudos e freelas",
    bullets: [
      "Criação de interfaces SPA com React + Vite",
      "Consumo de APIs REST, estado global leve",
      "Forte foco em responsividade e detalhes visuais",
    ],
  },
  {
    title: "Formação e estudos",
    period: "2022 - Atual",
    place: "Cursos online / Bootcamps",
    bullets: [
      "Fundamentos de HTML, CSS, JavaScript moderno",
      "TypeScript, boas práticas e padrões de projeto",
      "Versionamento com Git e GitHub",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
          Experience
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Um pouco da minha trajetória até aqui.
        </h3>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm">{exp.title}</h4>
                  <p className="text-[11px] text-gray-500">{exp.place}</p>
                </div>
                <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
