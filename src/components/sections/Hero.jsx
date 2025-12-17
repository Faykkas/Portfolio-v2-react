import { useEffect, useMemo, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Hero() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 35 });

  const reducedMotion = usePrefersReducedMotion();

  // Texte "typewriter" (sobre, pro)
  const fullLine = useMemo(() => "modernes, rapides et orientées produit.", []);
  const [typed, setTyped] = useState(reducedMotion ? fullLine : "");

  useEffect(() => {
    if (reducedMotion) return;

    let i = 0;
    const t = window.setInterval(() => {
      i += 1;
      setTyped(fullLine.slice(0, i));
      if (i >= fullLine.length) window.clearInterval(t);
    }, 20);

    return () => window.clearInterval(t);
  }, [fullLine, reducedMotion]);

  // Spotlight souris
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      setPos({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative pt-20 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl bg-rose-500/10" />
        <div className="absolute right-[-120px] top-[140px] h-[420px] w-[420px] rounded-full blur-3xl bg-[color:var(--text)]/10" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface)] px-8 py-12 shadow-sm md:px-14 md:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background: `radial-gradient(900px circle at ${pos.x}% ${pos.y}%, rgba(244,63,94,0.16), transparent 55%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-4 py-2 text-xs font-semibold text-[color:var(--muted)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500/30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500/70" />
              </span>
              Disponible • Freelance
            </div>

            <h1 className="mt-7 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="text-[color:var(--text)]">Samuel</span>
              <span className="mt-2 block text-[color:var(--muted)]">
                Je conçois des interfaces{" "}
                <span className="font-semibold text-[color:var(--text)]">
                  {typed}
                  {!reducedMotion && typed.length < fullLine.length ? (
                    <span className="ml-1 inline-block w-[8px] align-middle opacity-70 animate-[caret_0.9s_infinite]" />
                  ) : null}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Développeur web diplômé (DWWM). J’accompagne startups, indépendants
              et petites équipes : création de site, refonte UI, intégration,
              debug et optimisation.
              <span className="block opacity-85">
                Stack : React côté front, Laravel/PHP côté back.
              </span>
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-full bg-[color:var(--btn)] px-6 py-3 text-sm font-semibold text-[color:var(--btn-text)] shadow-sm transition hover:-translate-y-[1px]"
              >
                Voir mes projets
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-6 py-3 text-sm font-semibold text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface)]"
              >
                Me contacter
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["Création de site", "Refonte UI", "Debug", "WordPress"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-3 py-1 text-xs font-medium text-[color:var(--muted)] shadow-sm"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col items-center gap-2 text-[color:var(--muted)]">
              <span className="text-xs">Scroll</span>
              <span className="h-8 w-[2px] overflow-hidden rounded-full bg-[color:var(--border)]">
                <span className="block h-3 w-full animate-[heroScroll_1.2s_infinite] bg-[color:var(--muted)]/60" />
              </span>
            </div>

            <style>{`
              @keyframes heroScroll {
                0% { transform: translateY(-8px); opacity: 0; }
                35% { opacity: 1; }
                100% { transform: translateY(26px); opacity: 0; }
              }

              @keyframes caret {
                0%, 45% { opacity: 0; }
                50%, 100% { opacity: 1; }
              }

              .animate-\\[caret_0\\.9s_infinite\\] {
                background: currentColor;
                height: 1.05em;
                border-radius: 2px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
