'use client';

import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ecosystem, type EcosystemProject } from '@/lib/site';

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Blink Dev ecosystem"
          title="One lifecycle, four tools"
          description="Beacon is the understand stage of the Blink Dev toolchain — from creating and building software to protecting and understanding it."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((project, i) => (
            <Reveal key={project.name} delay={0.05 + i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: EcosystemProject }) {
  const monogram = project.name.charAt(0);

  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span
          className={`grid h-10 w-10 place-items-center rounded-md border font-mono text-base font-semibold ${
            project.current
              ? 'border-beacon/50 bg-beacon/10 text-beacon'
              : 'border-line bg-abyss/60 text-muted group-hover:border-harbor/50 group-hover:text-mist'
          }`}
        >
          {monogram}
        </span>
        {project.current ? (
          <span className="rounded-full border border-beacon/50 bg-beacon/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-beacon">
            You are here
          </span>
        ) : (
          <span aria-hidden className="text-faint transition-colors group-hover:text-harbor">
            ↗
          </span>
        )}
      </div>

      <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        {project.stage}
      </div>
      <div className="mt-1.5 font-mono text-base font-semibold text-mist">{project.name}</div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
    </>
  );

  const base = 'flex h-full flex-col rounded-lg border p-5 transition-colors';

  if (project.current) {
    return (
      <div aria-current="page" className={`${base} border-beacon/40 bg-beacon/[0.04]`}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${project.name} — ${project.description} (opens in a new tab)`}
      className={`group ${base} border-line bg-slate/40 hover:border-harbor/50 hover:bg-slate/70`}
    >
      {inner}
    </a>
  );
}
