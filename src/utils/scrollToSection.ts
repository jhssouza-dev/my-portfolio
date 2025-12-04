export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // tenta pegar o header real
  const header = document.querySelector("header") as HTMLElement | null;

  // se não achar, usa 70 como fallback (comportamento atual)
  const headerOffset = header?.offsetHeight ?? 70;

  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
