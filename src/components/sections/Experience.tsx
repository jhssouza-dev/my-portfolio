import { experiences } from "../../data/experience";
import { education } from "../../data/education";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export function Experience() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="experience"
      ref={ref}
      className={`min-h-[80vh] px-6 py-12 md:py-20  ${
        isVisible ? "reveal reveal-visible" : "reveal"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            Experience
          </h2>
          <h3 className="heading-font text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mt-1">
            Background & Formation
          </h3>
        </div>

        {/* EXPERIENCE BLOCK */}
        <div className="space-y-12">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">
              Professional Experience
            </h4>

            {experiences.map((exp, idx) => (
              <div key={idx} className="mt-4 border-l-2 border-amber-500 pl-4">
                <p className="text-sm text-amber-600 font-semibold">
                  {exp.title}
                </p>
                <p className="text-xs text-slate-500">
                  {exp.place} • {exp.period}
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {exp.bullets.map((item, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* EDUCATION BLOCK */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Education</h4>

            {education.map((edu, idx) => (
              <div key={idx} className="mt-4 border-l-2 border-slate-300 pl-4">
                <p className="text-sm font-medium text-slate-800">
                  {edu.course}
                </p>
                <p className="text-xs text-slate-500">
                  {edu.place} • {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
