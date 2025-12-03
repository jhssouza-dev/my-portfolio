import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { techIcons, type TechKey } from "../../data/techIcons";

export function Projects() {
  const { ref, isVisible } = useRevealOnScroll();
  const [openImage, setOpenImage] = useState<string | null>(null);

  // ESC fecha modal
  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenImage(null);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`reveal px-6 py-14 md:py-20 ${
        isVisible ? "reveal-visible" : ""
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
            visuals, performance, and best practices
          </p>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:border-amber-200"
            >
              {/* PREVIEW PROFISSIONAL */}
              <div
                onClick={() => project.image && setOpenImage(project.image)}
                className="relative h-32 sm:h-36 overflow-hidden cursor-pointer bg-slate-900 rounded-xl group"
              >
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-center rounded-none transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                    />

                    {/* Gradient overlay no hover */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge “View preview” no hover */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 text-[11px] text-slate-100 border border-white/10 backdrop-blur-sm">
                        <span aria-hidden className="text-xs">🔍</span>
                        <span>View preview</span>
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Preview
                    <span className="block mt-1 text-[10px] font-medium text-slate-600">
                      {project.name}
                    </span>
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

                {/* TECHS COM ICONES COMPARTILHADOS */}
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
                      className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900 transition-colors"
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

      {/* MODAL */}
      {openImage && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="modal-fade-in relative cursor-default max-w-[min(1200px,90vw)] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão X */}
            <button
              onClick={() => setOpenImage(null)}
              className="absolute -top-4 -right-4 bg-white text-slate-900 w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-lg font-bold hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              ×
            </button>

            <img
              src={openImage}
              alt="Project preview enlarged"
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
