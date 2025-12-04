export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 py-4 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs sm:text-sm text-slate-500">
          © {year} João Souza. Frontend Web Developer.
        </p>
      </div>
    </footer>
  );
}
