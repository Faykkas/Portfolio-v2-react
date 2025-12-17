import { projects } from "../../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard } from "swiper/modules";

import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function ProjectCard({ p }) {
  return (
    <article className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-[1px]">
        {/* cover (image ou cover stylée) */}
        <div className="relative h-44 w-full bg-[color:var(--surface-solid)]">
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full [background:radial-gradient(700px_circle_at_20%_0%,rgba(244,63,94,0.14),transparent_55%)]" />
          )}

          {/* petit overlay au hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.06))]" />
        </div>

        <div className="p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-base font-semibold text-[color:var(--text)]">
              {p.title}
            </h3>
            {p.year ? (
              <span className="text-xs text-[color:var(--muted)]">{p.year}</span>
            ) : null}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
            {p.description}
          </p>

          {/* tags */}
          {p.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--chip-bg)] px-3 py-1 text-xs font-medium text-[color:var(--chip-text)]"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            {p.demo ? (
              <a
                href={p.demo}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--btn)] px-4 py-2 text-sm font-semibold text-[color:var(--btn-text)] shadow-sm transition hover:-translate-y-[1px]"
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le site : ${p.title}`}
                title="Voir le site"
              >
                <FiExternalLink className="text-base" />
                Site
              </a>
            ) : null}

            {p.github ? (
              <a
                href={p.github}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-4 py-2 text-sm font-semibold text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--surface)]"
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le code GitHub : ${p.title}`}
                title="Voir le code"
              >
                <SiGithub className="text-base" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-14 md:mt-16">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Projets</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            Mes projets réalisés
          </p>
        </div>

        <div className="mt-6">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={16}
            coverflowEffect={{
              rotate: 18,
              stretch: 0,
              depth: 180,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            modules={[EffectCoverflow, Pagination, Keyboard]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title}>
                <ProjectCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="mt-3 text-xs text-[color:var(--muted)]">
          Astuce : clavier ← → ou swipe / trackpad.
        </p>
      </div>
    </section>
  );
}
