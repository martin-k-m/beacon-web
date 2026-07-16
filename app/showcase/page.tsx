import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { CodeBlock } from '@/components/CodeBlock';
import {
  HealthCard,
  MaintenanceBadge,
  widgetPreviews,
} from '@/components/widgets/previews';
import { widgets, embed, site, type WidgetDef } from '@/lib/site';
import { GitHubIcon, DocsIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Widget showcase — Beacon',
  description:
    'A gallery of Beacon’s embeddable SVG widgets — health card, activity graph, language, contributor, and release cards, plus a maintenance badge — in dark and light themes, with copy-paste embed snippets. Sample data.',
  alternates: { canonical: 'https://beacon.blinkdev.me/showcase' },
};

const SAMPLE = embed.sampleRepo; // beacon-labs/aurora

function markdownSnippet(w: WidgetDef) {
  if (w.endpoint === 'badge') {
    return `![Beacon](${embed.badgeBase}/${SAMPLE}?theme=dark)`;
  }
  return `![Beacon ${w.name}](${embed.widgetBase}/${SAMPLE}?type=${w.key}&theme=dark&size=medium)`;
}

export default function ShowcasePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* header */}
        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="absolute inset-0 bg-blueprint opacity-30" />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="Showcase"
              title="Embeddable widgets, in every theme"
              description="Beacon serves each of these as an SVG from your own instance. Drop them into a README, a docs site, or a portfolio. Below are self-drawn previews with sample data — the real widgets render live from your Beacon host."
              align="center"
            />
            <Reveal delay={0.06} className="mt-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-beacon/40 bg-beacon/[0.07] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-beacon">
                <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
                Previews use sample data · beacon-labs/aurora
              </span>
            </Reveal>
          </div>
        </section>

        {/* gallery */}
        <section className="pb-8">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-2">
              {widgets.map((w, i) => {
                const Preview = widgetPreviews[w.key];
                const badge = w.endpoint === 'badge';
                return (
                  <Reveal key={w.key} delay={0.04 + (i % 2) * 0.06}>
                    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-slate/40">
                      <div className="flex items-baseline justify-between border-b border-line px-5 py-4">
                        <h3 className="text-base font-semibold text-mist">{w.name}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                          /{w.endpoint === 'badge' ? 'badge' : 'widget'}
                        </span>
                      </div>
                      <p className="px-5 pt-4 text-sm leading-relaxed text-muted">
                        {w.blurb}
                      </p>

                      {/* dark + light variants */}
                      <div className="grid gap-3 p-5 sm:grid-cols-2">
                        <VariantBox label="dark" tone="dark">
                          <Preview theme="dark" className={badge ? 'w-[190px]' : 'w-full'} />
                        </VariantBox>
                        <VariantBox label="light" tone="light">
                          <Preview theme="light" className={badge ? 'w-[190px]' : 'w-full'} />
                        </VariantBox>
                      </div>

                      <div className="mt-auto px-5 pb-5">
                        <CodeBlock label="Markdown" code={markdownSnippet(w)} />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* in context */}
        <section className="border-t border-line bg-abyss/40 py-20 sm:py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="In context"
              title="How they look in the wild"
              description="The same widgets, shown where you would actually use them. All sample data."
              align="center"
            />

            <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
              {/* README mockup */}
              <Reveal delay={0.05}>
                <div className="overflow-hidden rounded-xl border border-line bg-slate/60">
                  <div className="flex items-center gap-2 border-b border-line bg-abyss/60 px-4 py-2.5">
                    <DocsIcon width={14} height={14} className="text-muted" />
                    <span className="font-mono text-xs text-muted">README.md</span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-faint">
                      preview
                    </span>
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="text-lg font-bold text-mist"># aurora</div>
                    <MaintenanceBadge theme="dark" className="w-[190px]" />
                    <p className="text-sm leading-relaxed text-muted">
                      Real-time data-sync engine for local-first apps.
                    </p>
                    <div className="rounded-lg border border-line bg-abyss/50 p-2">
                      <HealthCard theme="dark" className="w-full" />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* portfolio card */}
              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-xl border border-line bg-gradient-to-b from-slate/70 to-abyss/60 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                    Portfolio · Projects
                  </div>
                  <div className="mt-3 text-lg font-semibold text-mist">Aurora</div>
                  <p className="mt-1 text-sm text-muted">
                    An open-source sync engine I maintain.
                  </p>
                  <div className="mt-5">
                    <HealthCard theme="dark" className="w-full" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
                    Live Beacon health · updates automatically
                  </div>
                </div>
              </Reveal>

              {/* profile / light widget */}
              <Reveal delay={0.19}>
                <div className="overflow-hidden rounded-xl border border-line bg-slate/60 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                    Profile widget · light theme
                  </div>
                  <div className="mt-4 space-y-3 rounded-lg bg-[#F3F5F8] p-4">
                    <LanguageCardLight />
                    <ContributorCardLight />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-faint">
                    The <span className="text-muted">light</span> theme sits cleanly
                    on white — GitHub profile READMEs, docs sites, or slide decks.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.24} className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/docs#widgets" className="btn-primary">
                <DocsIcon width={16} height={16} />
                Widget docs & embed options
              </a>
              <a href={site.github} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                <GitHubIcon width={16} height={16} />
                View on GitHub
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function VariantBox({
  label,
  tone,
  children,
}: {
  label: string;
  tone: 'dark' | 'light';
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg border p-4 ${
        tone === 'light' ? 'border-line bg-[#EEF1F5]' : 'border-line bg-abyss/60'
      }`}
    >
      <div className="flex w-full items-center justify-center">{children}</div>
      <span
        className={`font-mono text-[9px] uppercase tracking-widest ${
          tone === 'light' ? 'text-[#5A6472]' : 'text-faint'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* Small light-theme previews used inside the profile mockup. */
function LanguageCardLight() {
  const Preview = widgetPreviews.language;
  return <Preview theme="light" className="w-full" />;
}
function ContributorCardLight() {
  const Preview = widgetPreviews.contributor;
  return <Preview theme="light" className="w-full" />;
}
