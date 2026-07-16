import { site } from '@/lib/site';
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Beacon · {site.license} · Open source</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
            Understand any GitHub repository
          </span>
        </div>
      </div>
    </footer>
  );
}
