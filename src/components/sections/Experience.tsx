import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const experiences = [
  {
    title: "",
    period: "",
    place: "",
    bullets: [
      "",
      "",
      "",
    ],
  },
 
];

export function Experience() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="experience"
      ref={ref}
      className={`reveal min-h-[80vh] px-6 py-12 md:py-20 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-slate-500">
            Experience
          </h2>
          <h3 className="heading-font text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
            A bit of my journey up to this point.
          </h3>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-6 md:pl-10">
          {/* linha vertical da timeline */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative flex gap-4 md:gap-6"
              >
                {/* ponto da linha */}
                <div className="absolute left-0 md:left-1 mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm" />
                </div>

                {/* conteúdo */}
                <div className="ml-4 md:ml-6 flex-1">
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 md:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-slate-900">
                          {exp.title}
                        </h4>
                        <p className="text-[11px] md:text-xs text-slate-500">
                          {exp.place}
                        </p>
                      </div>
                      <span className="text-[11px] md:text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="text-xs md:text-[13px] text-slate-700 space-y-1.5 list-disc list-inside">
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  {/* conector inferior opcional (só não mostra no último) */}
                  {index !== experiences.length - 1 && (
                    <div className="ml-1 mt-2 h-4 border-l border-dashed border-slate-200 md:hidden" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
