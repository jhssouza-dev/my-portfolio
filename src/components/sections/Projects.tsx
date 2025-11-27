import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
          Projects
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Alguns projetos que representam meu código.
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition"
            >
              {/* thumbnail simples */}
              <div className="h-32 rounded-xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center text-xs text-gray-200">
                Preview: {project.name}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-sm">{project.name}</h4>
                  {project.highlight && (
                    <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {project.highlight}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px]">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xs mt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
