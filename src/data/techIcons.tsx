// src/data/techIcons.tsx
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { ComponentType } from "react";

export type TechKey =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Tailwind"
  | "Git"
  | "API"
  | "Vite";

type TechMeta = {
  Icon: ComponentType<{ className?: string; size?: number }>;
  colorClass: string;
};

export const techIcons: Record<TechKey, TechMeta> = {
  HTML: { Icon: FaHtml5, colorClass: "text-orange-500" },
  CSS: { Icon: FaCss3Alt, colorClass: "text-blue-500" },
  JavaScript: { Icon: FaJs, colorClass: "text-yellow-500" },
  TypeScript: { Icon: SiTypescript, colorClass: "text-blue-600" },
  React: { Icon: FaReact, colorClass: "text-sky-500" },
  Tailwind: { Icon: SiTailwindcss, colorClass: "text-cyan-500" },
  Git: { Icon: FaGitAlt, colorClass: "text-orange-500" },
  API: { Icon: TbApi, colorClass: "text-amber-500" },
  Vite: { Icon: SiVite, colorClass: "text-[#646CFF]" },
};
