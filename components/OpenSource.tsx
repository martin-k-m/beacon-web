'use client';

import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { site, monorepo } from '@/lib/site';
import { GitHubIcon, DocsIcon, TerminalIcon, ServerIcon, GridIcon } from './icons';

// Verifiable, structural facts about the project — no adoption numbers.
const facts = [
  { k: site.license, v: 'License' },
  { k: site.language, v: 'Language' },
  { k: 'Monorepo', v: '3 apps · 3 packages' },
  { k: 'Self-host', v: 'Run it yourself' },
];

const kindStyle: Record<string, string> = {
  app: 'border-beacon/40 bg-beacon/10 text-beacon',
  package: 'border-harbor/40 bg-harbor/10 text-harbor',
};

export function OpenSource() {
  return (
    <section id="open-source" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Open source"
          title="Built in the open, yours to run"
          description="Beacon is MIT licensed and self-hostable. It's a newly published project — no adoption metrics to show yet, just a real, working codebase. The most useful thing you can do is read it, run it, and open an issue or PR."
          align="center"
        />

        {/* Structural facts only — deliberately NO stars / contributors / downloads. */}
        <Reveal delay={0.08} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.v} className="bg-slate p-5 text-center">
              <div className="font-mono text-lg font-bold text-mist">{f.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted">{f.v}</div>
            </div>
          ))}
        </Reveal>

        {/* What's actually in the monorepo */}
        <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
          {monorepo.map((part, i) => {
            const Icon =
              part.name.includes('cli')
                ? TerminalIcon
                : part.name.includes('api')
                  ? ServerIcon
                  : part.name.includes('web')
                    ? GridIcon
                    : DocsIcon;
            return (
              <Reveal key={part.name} delay={0.05 + (i % 2) * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-md border border-line bg-slate/50 p-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded border border-line bg-abyss/70 text-muted">
                    <Icon width={18} height={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm text-mist">{part.name}</code>
                      <span
                        className={`rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${kindStyle[part.kind]}`}
                      >
                        {part.kind}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{part.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={site.github} target="_blank" rel="noreferrer noopener" className="btn-primary">
            <GitHubIcon width={16} height={16} />
            View on GitHub
          </a>
          <a href={site.docs} target="_blank" rel="noreferrer noopener" className="btn-secondary">
            <DocsIcon width={16} height={16} />
            Documentation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
