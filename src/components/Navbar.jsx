import { useContext, useEffect, useCallback, useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/images/morpion.png";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  // Bloque le scroll quand le menu est ouvert + cleanup garanti
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fermer au clavier (Escape)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <a href="#" className="group flex items-center" aria-label="Accueil">
            <img
              src={logo}
              alt="Samuel Pechinez — Développeur web"
              className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </a>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Burger mobile (toggle) */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)]"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? (
                <X size={18} />
              ) : (
                <div className="flex flex-col gap-[3px]">
                  <span className="block h-[2px] w-4 bg-current" />
                  <span className="block h-[2px] w-4 bg-current" />
                  <span className="block h-[2px] w-4 bg-current" />
                </div>
              )}
            </button>

            {/* Toggle theme */}
            <button
              onClick={toggleTheme}
              aria-label="Changer le thème"
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface-solid)]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface-solid)]"
            >
              Disponible
            </a>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMenu} // clic partout = ferme
          role="dialog"
          aria-modal="true"
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* panneau (stop propagation pour ne pas fermer quand on clique dedans) */}
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[color:var(--bg)] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <img src={logo} alt="" className="h-8 w-auto object-contain" />
              <button
                onClick={closeMenu}
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)]"
                aria-label="Fermer le menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-[color:var(--text)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-10 inline-flex w-full justify-center rounded-full bg-[color:var(--btn)] px-5 py-3 text-sm font-semibold text-[color:var(--btn-text)] shadow-sm"
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </>
  );
}
