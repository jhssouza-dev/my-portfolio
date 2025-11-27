export type Project = {
  id: string;
  name: string;
  description: string;
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio Pessoal",
    description:
      "SPA em React com layout moderno, navegação por scroll suave e deploy na Vercel.",
    techs: ["React", "TypeScript", "Tailwind", "Vite"],
    liveUrl: "https://seu-portfolio.vercel.app",
    repoUrl: "https://github.com/seuuser/portfolio",
    highlight: "Design focado em UI/UX",
  },
  {
    id: "todo",
    name: "Todo App",
    description:
      "Aplicativo de tarefas com filtros, persistência em localStorage e tema claro/escuro.",
    techs: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://seu-todo.vercel.app",
    repoUrl: "https://github.com/seuuser/todo-app",
    highlight: "Estado e UX simples e claros",
  },
];
