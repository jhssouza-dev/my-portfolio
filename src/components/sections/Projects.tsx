import { projects } from "../../data/projects";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { techIcons, type TechKey } from "../techIcons";

export function Projects() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-[80vh] px-6 py-12 md:py-20 bg-slate-100 ${
        isVisible ? "reveal reveal-visible" : "reveal"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-slate-500">
            Projects
          </h2>
          <h3 className="heading-font text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
            Some projects that represent my code..
          </h3>
          <p className="mt-3 text-sm md:text-[15px] text-slate-600 max-w-2xl">
            A selection of works focused on modern interfaces, organized code,
            and attention to detail. Always striving for a balance between
            visuals, performance, and best practices.
          </p>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:border-amber-200"
            >
              {/* IMAGEM FIXA DO PROJETO (MAIOR) */}
              <div className="relative w-full aspect-14/9 bg-white flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    No preview
                  </div>
                )}
              </div>

              {/* CONTEÚDO */}
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-semibold text-slate-900">
                      {project.name}
                    </h4>
                    <p className="text-xs md:text-[13px] text-slate-700">
                      {project.description}
                    </p>
                  </div>

                  {project.highlight && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* TECHS COM ICONES */}
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {project.techs.map((tech) => {
                    const meta = techIcons[tech as TechKey];
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                      >
                        {meta && (
                          <meta.Icon
                            className={`w-4 h-4 ${meta.colorClass}`}
                          />
                        )}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>

                {/* LINKS */}
                <div className="mt-3 flex gap-4 text-xs md:text-[13px]">
                  {project.liveUrl && project.liveUrl.trim() !== "" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-amber-600 hover:text-amber-500 transition-colors"
                    >
                      Live
                      <span aria-hidden>↗</span>
                    </a>
                  )}

                  {project.repoUrl && project.repoUrl.trim() !== "" && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Code
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
