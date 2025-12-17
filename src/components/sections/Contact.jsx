import { useMemo, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail, FiCopy, FiSend } from "react-icons/fi";

export default function Contact() {
  const email = "samuel.pechinez@gmail.com";
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Contact — ${name ? name : "Nouveau message"}`;
    const body = `Bonjour Samuel,%0D%0A%0D%0A${encodeURIComponent(
      msg || ""
    )}%0D%0A%0D%0A—%0D%0A${encodeURIComponent(name || "")}${
      from ? `%0D%0A${encodeURIComponent(from)}` : ""
    }`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [email, name, from, msg]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback simple
      window.prompt("Copie l'email :", email);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 mt-14 md:mt-16 mb-24">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
        {/* glow subtil */}
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(900px_circle_at_20%_0%,rgba(244,63,94,0.12),transparent_55%)]" />

        <div className="relative grid gap-8 md:grid-cols-12">
          {/* Col gauche */}
          <div className="md:col-span-5">
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              Dispo pour une mission freelance : création de site, intégration,
              debug, améliorations UI / perf, ou WordPress.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)]">
                  <FiMail />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-[color:var(--muted)]">Email</p>
                  <p className="truncate text-sm font-semibold text-[color:var(--text)]">
                    {email}
                  </p>
                </div>
                <button
                  onClick={copyEmail}
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)] transition hover:bg-[color:var(--surface-solid)]"
                >
                  <FiCopy />
                  {copied ? "Copié" : "Copier"}
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/samuel-pechinez-449a922a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-4 py-2 text-sm font-semibold text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface)]"
                >
                  <SiLinkedin className="text-base" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Faykkas"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-4 py-2 text-sm font-semibold text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface)]"
                >
                  <SiGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Col droite : “formulaire” mailto */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] p-6 shadow-sm">
              <p className="text-sm font-semibold text-[color:var(--text)]">
                Envoie-moi un message
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                Ce formulaire ouvre ton application mail avec le message pré-rempli.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ton nom"
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
                />
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Ton email (optionnel)"
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
                />
              </div>

              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Ton message…"
                rows={5}
                className="mt-3 w-full resize-none rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
              />

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--btn)] px-5 py-2.5 text-sm font-semibold text-[color:var(--btn-text)] shadow-sm transition hover:-translate-y-[1px]"
                >
                  <FiSend />
                  Envoyer
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-2.5 text-sm font-semibold text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface-solid)]"
                >
                  <FiMail />
                  Ouvrir mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
