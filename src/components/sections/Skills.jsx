import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const frontend = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact, core: true },
];

const backend = [
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel, core: true },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "SQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
];

function TechPill({ s }) {
  const Icon = s.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-4 py-3 shadow-sm transition hover:-translate-y-[1px] hover:bg-[color:var(--surface)]">
      {/* glow subtil */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:radial-gradient(650px_circle_at_20%_0%,rgba(244,63,94,0.16),transparent_50%)]" />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)]">
            <Icon className="text-[18px]" />
          </span>
          <span className="text-sm font-semibold text-[color:var(--text)]">
            {s.name}
          </span>
        </div>

        {s.core ? (
          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--chip-bg)] px-3 py-1 text-[11px] font-semibold text-[color:var(--chip-text)]">
            Core
          </span>
        ) : null}
      </div>
    </div>
  );
}

function SkillCard({ title, desc, skills }) {
  return (
    <div className="relative">
      {/* glow du container */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-70 blur-2xl [background:radial-gradient(900px_circle_at_10%_0%,rgba(244,63,94,0.12),transparent_55%)]" />

      <div className="relative rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-[color:var(--text)]">
              {title}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">{desc}</p>
          </div>
          <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-3 py-1 text-xs text-[color:var(--muted)]">
            {skills.length} skills
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {skills.map((s) => (
            <TechPill key={s.name} s={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mt-14 md:mt-16">
      {/* IMPORTANT : aucun "Compétences" ici */}
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard
          title="Front-end"
          desc="Interfaces, composants, intégration"
          skills={frontend}
        />
        <SkillCard
          title="Back-end"
          desc="API, frameworks, bases de données"
          skills={backend}
        />
      </div>
    </section>
  );
}
