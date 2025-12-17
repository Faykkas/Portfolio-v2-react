export default function About() {
  const highlights = [
    {
      title: "Ce que je fais",
      desc: "Sites vitrines, pages d’atterrissage, intégration UI, refonte et amélioration d’existant.",
    },
    {
      title: "Debug & optimisation",
      desc: "Corrections, responsive, performance, et nettoyage de code pour livrer un rendu solide.",
    },
    {
      title: "Back quand nécessaire",
      desc: "API / logique serveur / base de données (PHP/Laravel ou Node) pour compléter une feature.",
    },
    {
      title: "WordPress",
      desc: "Mise en place, personnalisation et ajustements pour un site simple à gérer.",
    },
  ];

  return (
    <section id="about" className="mt-14 md:mt-16">
      <div className="grid gap-6 md:grid-cols-12">
        {/* Bloc principal */}
        <div className="md:col-span-7 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight">À propos</h2>

          <p className="mt-3 leading-relaxed text-[color:var(--muted)]">
            Je m’appelle Samuel. Je suis développeur web, diplômé DWWM depuis mai
            après 8 mois de formation. J’aime transformer une idée en interface
            propre et agréable à utiliser.
          </p>

          <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
            Pendant ma formation, j’ai réalisé plusieurs projets. Les plus
            pertinents : <span className="font-semibold text-[color:var(--text)]">Ambrosia</span>,
            un site de rencontre développé durant mon stage (PHP, HTML, CSS, JS),
            et un <span className="font-semibold text-[color:var(--text)]">site de recettes</span>{" "}
            permettant aux étudiants de partager leurs recettes et leur coût.
          </p>

          <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
            Aujourd’hui je cherche des missions en freelance. Je me forme
            activement à React (très demandé) et j’utilise aussi Laravel en back-end.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-[color:var(--text)]">
                  {h.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc secondaire */}
        <div className="md:col-span-5 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
          <h3 className="text-base font-semibold text-[color:var(--text)]">
            Disponible pour
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            <li>• Création de site (vitrine / landing page)</li>
            <li>• Intégration & responsive (maquettes → code)</li>
            <li>• Debug, corrections, améliorations</li>
            <li>• Petit back-end / API si besoin</li>
            <li>• WordPress (mise en place + ajustements)</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] p-4">
            <p className="text-sm font-semibold text-[color:var(--text)]">
              Objectif
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
              Démarrer rapidement avec une mission freelance, livrer un résultat
              propre et fiable, puis construire une collaboration sur la durée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
