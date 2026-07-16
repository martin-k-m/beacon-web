import { site, ecosystem, type EcosystemProject } from '@/lib/site';
import { GitHubIcon } from './icons';
import { BeaconMark } from './BeaconMark';

type FooterLink = { label: string; href: string; external?: boolean };
const groups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Docs', href: '/docs' },
      { label: 'Showcase', href: '/showcase' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Source',
    links: [
      { label: 'GitHub', href: site.github, external: true },
      { label: 'Docs (in-repo)', href: site.docs, external: true },
      { label: `License (${site.license})`, href: `${site.github}/blob/main/LICENSE`, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-night">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded border border-beacon/40 bg-beacon/10 text-beacon">
                <BeaconMark size={16} />
              </span>
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-mist">
                BEACON
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.summary}
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-mist"
            >
              <GitHubIcon width={16} height={16} />
              martin-k-m/beacon
            </a>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="eyebrow">{g.title}</div>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external
                        ? { target: '_blank', rel: 'noreferrer noopener' }
                        : {})}
                      className="text-sm text-muted transition-colors hover:text-mist"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Blink Dev ecosystem */}
        <nav aria-label="Blink Dev ecosystem" className="mt-14 border-t border-line pt-10">
          <div className="eyebrow">Part of the Blink Dev ecosystem</div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((project) => (
              <li key={project.name}>
                <EcosystemCard project={project} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Beacon · {site.license} · Open source</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
            Understand · Blink Dev
          </span>
        </div>
      </div>
    </footer>
  );
}

function EcosystemCard({ project }: { project: EcosystemProject }) {
  const monogram = project.name.charAt(0);
  const base = 'flex h-full items-center gap-3 rounded-md border p-4 transition-colors';

  const inner = (
    <>
      <span
        aria-hidden
        className={`grid h-8 w-8 shrink-0 place-items-center rounded border font-mono text-sm font-semibold ${
          project.current
            ? 'border-beacon/40 bg-beacon/10 text-beacon'
            : 'border-line bg-night/60 text-muted group-hover:border-harbor/50 group-hover:text-mist'
        }`}
      >
        {monogram}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-mono text-sm font-semibold text-mist">{project.name}</span>
          {project.current ? (
            <span className="rounded-full border border-beacon/40 bg-beacon/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-beacon">
              This site
            </span>
          ) : (
            <span aria-hidden className="text-faint transition-colors group-hover:text-harbor">
              ↗
            </span>
          )}
        </span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">
          {project.description}
        </span>
      </span>
    </>
  );

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
