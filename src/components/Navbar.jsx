import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center"
          aria-label="Retour en haut"
        >
          <img
            src={logo}
            alt="Samuel Pechinez — Développeur web"
            className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            loading="eager"
          />
        </a>

        {/* Navigation */}
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
          {/* Toggle theme */}
          <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)] shadow-sm transition-colors hover:bg-[color:var(--surface-solid)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] shadow-sm transition-colors hover:bg-[color:var(--surface-solid)]"
          >
            Disponible
          </a>
        </div>
      </div>
    </header>
  );
}
