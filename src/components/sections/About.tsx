import { useRevealOnScroll } from "../../hooks/useRevealOnScroll.ts";

// ÍCONES
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techStack = [
  { label: "HTML", Icon: FaHtml5, colorClass: "text-orange-500" },
  { label: "CSS", Icon: FaCss3Alt, colorClass: "text-blue-500" },
  { label: "JavaScript", Icon: FaJs, colorClass: "text-yellow-500" },
  { label: "TypeScript", Icon: SiTypescript, colorClass: "text-blue-600" },
  { label: "React", Icon: FaReact, colorClass: "text-sky-500" },
  { label: "Tailwind", Icon: SiTailwindcss, colorClass: "text-cyan-500" },
  { label: "Git", Icon: FaGitAlt, colorClass: "text-orange-500" },
  { label: "REST APIs", Icon: TbApi, colorClass: "text-amber-500" },
];

export function About() {
  const { ref: revealRef, isVisible } = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={revealRef}
      className={`reveal min-h-[60vh] px-6 py-14 md:py-20 ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* HEADER */}
        <div>
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-slate-500">
            About
          </h2>

          <h3 className="heading-font text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
            Who I am, what I do, and what I believe in.
          </h3>
        </div>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
          {/* TEXTO */}
          <div className="space-y-4">
            <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
            I’m a frontend developer focused on creating clean, responsive, and pleasant-to-use interfaces. I enjoy turning layouts into well-structured, maintainable components, with attention to visual details and user experience.
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
             Today I study and work with a focus on{" "}
              <span className="font-medium text-slate-900">
                React, TypeScript e Tailwind
              </span>
              , building modern, high-performance applications aligned with the practices used in the industry on a daily basis.
            </p>
          </div>

          {/* CARD COM STACK */}
          <div className="rounded-2xl p-6 border bg-white border-slate-200 text-slate-800 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
              Main tech stacks
            </p>

            <div className="grid grid-cols-4 gap-4 md:gap-5 mb-6 place-items-center">
              {techStack.map(({ label, Icon, colorClass }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-2 text-center transition-transform duration-200 hover:scale-105 ]"
                >
                  <Icon size={50} className={colorClass} />
                  <p className="text-[11px] font-medium text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-900">
                What I’m looking for
              </p>
              <p className="text-xs text-slate-600">
                Opportunities to grow in teams that value good practices, clean code, constant feedback, and a real focus on the user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
