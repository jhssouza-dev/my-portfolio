export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 70; // altura aproximada do navbar
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
